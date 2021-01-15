clear all
close
clc

syms q1 q2 q3 q4 q5 q6 x y z p nx ny nz ox oy oz ax ay az px py pz real

T1_0 = D_zrd((p/2)+q1)*D_t(0,0,100)*D_xrd((p/2));
T2_1 = D_zrd((p/2)+q2)*D_t(530,0,0);
T3_2 = D_zrd(p+q3)*D_xrd(-(p/2));
T4_3 = D_zrd(p+q4)*D_t(0,0,580)*D_xrd(-(p/2));
T5_4 = D_zrd(p+q5)*D_xrd(-(p/2));
T6_5 = D_zrd(p+q6)*D_t(0,0,210);
T6_0 = [nx ox ax px;
    ny oy ay py;
    nz oz az pz;
    0 0 0 1];

% --------- Ecuación 1 ---------

T6_1a = simplify(T2_1*T3_2*T4_3*T5_4*T6_5)
T6_1b = simplify(inv(T1_0)*T6_0)