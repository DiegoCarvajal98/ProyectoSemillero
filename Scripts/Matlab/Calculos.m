clear
clc
close all
%% Cinemática directa de posición.
% syms q1 q2 q3 q4 q5 q6 x y z real
q1 = 20;
q2 = -15;
q3 = -30;
q4 = 50;
q5 = 70;
q6 = -150;
p = fk(q1, q2, q3, q4, q5, q6)

%% Cinemática inversa de posición.
x = 0;
y = 400;
z = 600;
iv = ik(x, y, z);
Q1 = iv(1);
Q2 = iv(2);
Q3 = iv(3);
Q4 = iv(4);
Q5 = iv(5);
Q6 = iv(6);

%% Trayectoria
x = [0 -173.205 -173.205 0 173.205 173.205 0];
y = 400;
z = [600 500 300 200 300 500 600];
the_t = zeros(3, length(x));

for i = 1:length(x)
    the_1 = ik(x(i), y, z(i));
    for j = 1:3
        the_t(j, i) = the_1(1, j);
        if the_t(j, i) < 0
            the_t(j, i) = the_t(j, i) + 360;
        end
    end
end

the_p = zeros(6, 1);

for i = 1:3
    for j = 1:7
        the_p(j, 1) = the_t(i, j);
    end
    a = spl(0, 2, 12,the_p);        % Ecuaciones de las articulaciones 
                                    % para cada punto
    for j = 1:6
        theta_t(j, i) = a(j, 1);    % Matriz de ecuaciones para todos los 
                                    % puntos y todas las articulaciones
    end
end

%% Velocidad angular
dtheta_t = diff(theta_t, 'TIME');
syms q1_p(t) q2_p(t) q1(t) q2(t)
R10 = R_z(q1(t))*R_x(90);
R21 = R_z(q2(t))*R_x(-90);
R32 = [1 0 0; 0 1 0; 0 0 1];
R30 = R10*R21*R32;
R20 = R10*R21;
w100 = [0;0;q1_p(t)];
w212 = [0;q2_p(t);0];
w210 = R10*R21*w212;
w200 = w100+w210;
w323 = w212;
w300 = w200;

%% Aceleración angular (derivada de la velocidad angular)
d2theta_t = diff(dtheta_t, 'TIME');
syms q1_2p(t) q2_2p(t)
al100 = diff(w100, t);
al100 = subs(al100, diff(q1_p(t), t), q1_2p(t));
al212 = diff(w212, t);
al212 = subs(al212, diff(q2_p(t), t), q2_2p(t));
al210 = diff(w210, t);
al210 = subs(al210, diff(q1(t), t), q1_p(t));
al210 = subs(al210, diff(q2_p(t), t), q2_2p(t));
al200 = diff(w200, t);
al200 = subs(al200, diff(q2_p(t), t), q2_2p(t));
al200 = subs(al200, diff(q1(t), t), q1_p(t));
al200 = subs(al200, diff(q1_p(t), t), q1_2p(t));
al323 = al212;
al300 = al200;

%% Velocidad lineal
% Los centros de gravedad de los eslabónes 1 y 2 no tienen velocidad
% lineal.
v_c1t = 0;
v_c2t = 0;
syms d3(t) d3_p(t) 
T1_0 = D_t(0, 0, 410)*D_zr(q1(t))*D_xr(90);
T2_1 = D_zr(q2(t))*D_xr(-90);
T3_2 = D_t(0, 0, d3(t));
T3_0 = T1_0*T2_1*T3_2;
T3_0p = diff(T3_0, t);
T3_0p = subs(T3_0p, diff(q1(t), t), q1_p(t));
T3_0p = subs(T3_0p, diff(q2(t), t), q2_p(t));
T3_0p = subs(T3_0p, diff(d3(t), t), d3_p(t));
V3_0 = simplify(T3_0p*T3_0.'); % Matriz de transformacion de velocidad
rc333 = [0;0;-350;1];
rc300 = T3_0*rc333;
% Velocidad lineal del centro de gravedad del eslabón 3 escrito en
% coordenadas de S0, por el método matricial.
v_c3t = V3_0*rc300;

%% Aceleración lineal
% Los centros de gravedad de los eslabónes 1 y 2 no tienen aceleración
% lineal
a_c1t = 0;
a_c2t = 0;
syms d3_2p(t)
T3_02p = diff(T3_0p, t);
T3_02p = subs(T3_02p, diff(q1(t), t), q1_p(t));
T3_02p = subs(T3_02p, diff(q2(t), t), q2_p(t));
T3_02p = subs(T3_02p, diff(d3(t), t), d3_p(t));
T3_02p = subs(T3_02p, diff(q1_p(t), t), q1_2p(t));
T3_02p = subs(T3_02p, diff(q2_p(t), t), q2_2p(t));
T3_02p = subs(T3_02p, diff(d3_p(t), t), d3_2p(t));
A3_0 = simplify(T3_02p*T3_0.'); % Matriz de transformación de aceleración.
% Aceleración lineal del centro de gravedad del eslabón 3 escrito en
% coordenadas de S0, por el método matricial.
a_c3t = A3_0*rc300;

%% Modelo dinámico

%------------------------Camino hacia afuera-------------------------------
% i = 0
w000 = [0;0;0];
al000 = [0;0;0];
a000 = [0;0;0];
% Velocidad angular
w101 = R10.'*w100;
% Aceleración angular
al101 = (R10.'*al100)+cross((R10.'*w000), w101);
r100 = R10*[0;0;0];
% Aceleración lineal de S1
a101 = R10.'*(cross(al100, r100)+cross(w100, cross(w100, r100))+a000);
rc111 = [0;-113.18;0];
% Aceleración del centro de gravedad del eslabón 1
ac101 = cross(al101, rc111)+cross(w101, cross(w101, rc111))+a101;
m1 = 5393.88; % Masa del eslabón 1 en gramos.
% Cálculo de la derivada del momentum lineal del centro de gravedad del 
% eslabón 1
Lc101p = m1*ac101;
I1c11 = [71128567.34 0 0;
    0 45172672.8 0;
    0 0 31826991.18];
% Cálculo de la derivada del momentum angular del eslabón 1
H101p = I1c11*al101+cross(w101, I1c11*w101);

% i = 1
% Velocidad angular
w202 = R21.'*w101+w212;
% Aceleración angular
al202 = R21.'*al101+al212+cross((R21.'*w101), w212);
r212 = [0;0;0];
% Aceleración lineal de S2
a202 = cross(al202, r212)+cross(w202, cross(w202, r212))+r212.'*a101;
rc222 = [0;0;0];
% Aceleración del centro de gravedad del eslabón 2
ac202 = cross(al202, rc222)+cross(w202, cross(w202, rc222))+a202;
m2 = 2999.15; % Masa del eslabón 2 en gramos.
% Cálculo de la derivada del momentum lineal del centro de gravedad del 
% eslabón 2
Lc202p = m2*ac202;
I2c22 = [9815383.88 0 0;
    0 8010350.41 0;
    0 0 1197783.88];
% Cálculo de la derivada del momentum angular del eslabón 2
H202p = I2c22*al202+cross(w202, I2c22*w202);

% i = 2
% Velocidad angular
w303 = simplify(R32.'*w202+w323);
% Aceleración angular
al303 = simplify(R32.'*al202+al323+cross((R32.'*w202), w323));
r323 = [0;0;d3(t)];
% Aceleración del sistema S3
a303 = simplify(cross(al303, r323)+cross(w303, cross(w303, r323))+R32.'*a202);
rc333 = [0;0;-350];
% Aceleración del centro de gravedad del eslabón 3
ac303 = simplify(cross(al303, rc333)+cross(w303, cross(w303, rc333))+a303);
m3 = 12096; % Masa del eslabón 3 en gramos
% Cálculo de la derivada del momentum lineal del centro de gravedad del 
% eslabón 3
Lc303p = simplify(m3*ac303);
I3c33 = [500371200 0 0;
    0 500371200 0;
    0 0 12902400];
% Cálculo de la derivada del momentum angular del eslabón 3
H303p = simplify(I3c33*al303+cross(w303, I3c33*w303));

%------------------------Camino hacia adentro------------------------------
% j = 3
% f33 + W33 = Lc303p
W33 = R30.'*[0;0;-m3*9810];
f33 = simplify(Lc303p - W33); % Fuerzas de reacción en la articulación 3
% tao33 + r2c33 x f33 = H303p
r2c33 = [0;0;-(d3(t)-350)];
tao33 = simplify(H303p - cross(r2c33, f33)); % Momento de reacción artic 3

% j = 2
% f22 + W22 +(f32) = Lc202p
W22 = R20.'*[0;-m2*9810;0];
f32 = R32*(-f33);
f22 = simplify(Lc202p - W22 - f32);
% tao22 + (-tao32) = H202p
tao32 = R32*(-tao33);
tao22 = simplify(H202p - tao32);

% j = 1
% f11 + W11 +(f21) = Lc101p
W11 = R10.'*[0;m1*9810;0];
f21 = R21*(-f22);
f11 = simplify(Lc101p - W11 - f21);
% tao11 + tao21 = H101p
tao21 = R21*(-tao22);
tao11 = simplify(H101p - tao21);

% Modelo dinámico en coordenadas globales
f30 = R30*f33;
f20 = R20*f22;
f10 = R10*f11;
tao30 = R30*tao33;
tao20 = R20*tao22;
tao10 = R10*tao11;

%% ------------------------------Cálculo de cinemática directa------------------------------
function fw = fk(q1, q2, q3, q4, q5, q6)
T1_0 = D_zr(90+q1)*D_t(0,0,100)*D_xr(90);
T2_1 = D_zr(90+q2)*D_t(530,0,0);
T3_2 = D_zr(180+q3)*D_xr(-90);
T4_3 = D_zr(180+q4)*D_t(0,0,580)*D_xr(-90);
T5_4 = D_zr(180+q5)*D_xr(-90);
T6_5 = D_zr(180+q6)*D_t(0,0,210);
T6_0 = T1_0*T2_1*T3_2*T4_3*T5_4*T6_5;
p3 = [80; 0; 85; 1];
fw = T6_0*p3;   % Posicion del efector final en coordenadas globales.
end

%% ------------------------------Cálculo de cinemática inversa------------------------------
function iv = ik(x, y, z)

iv = [Q1, Q2, Q3, Q4, Q5, Q6];
end

%% --------------------------Cálculo de ecuaciones de trayectoria---------------------------
function sp = spl(t0, paso, tf, the)
% Calculo funciones segmentaria cubica
syms TIME

% tn=[0 2 6 7 12 15];  %vector entrada tiempo
% qn=[0 4 4 6 7 1];    %vector entrada angulos
qn = the;
tn = t0:paso:tf;
[fi,co] = size(tn);
y_spline = spline(tn,qn);
coef = y_spline.coefs;

for i=1:co-1
    vt(:,i)=[(TIME-tn(i))^3;(TIME-tn(i))^2;(TIME-tn(i));1];
end 
sp=simplify(coef*vt);
sp=collect(diag(sp));
sp=vpa(sp,4);        % Funciones

%  Comparacion con matlab
t1=tn(1):0.01:tn(2);
y1=subs(sp(1),TIME,t1);

t2=tn(2):0.01:tn(3);
y2=subs(sp(2),TIME,t2);

t3=tn(3):0.01:tn(4);
y3=subs(sp(3),TIME,t3);

t4=tn(4):0.01:tn(5);
y4=subs(sp(4),TIME,t4);

t5=tn(5):0.01:tn(6);
y5=subs(sp(5),TIME,t5);

t6=tn(6):0.01:tn(7);
y6=subs(sp(6),TIME,t6);

hold on
figure(1);plot(t1,y1,t2,y2,t3,y3,t4,y4,t5,y5,t6,y6)

% segmentaria  cubica matlab
xx=[t1 t2 t3 t4 t5 t6];
y_spli = spline(tn,qn,xx);
hold on
figure(2);plot(xx,y_spli);

end
