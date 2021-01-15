clear
clc
close all
%% Cinemática directa de posición.
% syms q1 q2 q3 q4 q5 q6 x y z real
% Posición 3 Solidworks
q1 = 20;
q2 = -15;
q3 = -30;
q4 = 50;
q5 = 70;
q6 = -150;
p = fk(q1, q2, q3, q4, q5, q6)

%% ------------------------------Cálculo de cinemática directa------------------------------
function fw = fk(q1, q2, q3, q4, q5, q6)
T1_0 = D_zr(90+q1)*D_t(0,0,81)*D_xr(90);
T2_1 = D_zr(90+q2)*D_t(795,0,0);
T3_2 = D_zr(180+q3)*D_xr(-90);
T4_3 = D_zr(180+q4)*D_t(0,0,504.1)*D_xr(-90);
T5_4 = D_zr(180+q5)*D_xr(-90);
T6_5 = D_zr(180+q6)*D_t(0,0,274.1);
T6_0 = T1_0*T2_1*T3_2*T4_3*T5_4*T6_5;
p3 = [56; 0; 85; 1];
fw = T6_0*p3;   % Posicion del efector final en coordenadas globales.
end
