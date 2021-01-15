% Matriz de rotación alrededor de z 4x4

function D_z = D_zrd(alpha)
    D_z = [cos(alpha) -sin(alpha) 0 0;
    sin(alpha) cos(alpha) 0 0;
    0 0 1 0;
    0 0 0 1]; 
end