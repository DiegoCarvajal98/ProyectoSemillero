% Matriz de rotación alrededor de z 4x4

function D_z = D_zr(alpha)
    D_z = [cosd(alpha) -sind(alpha) 0 0;
    sind(alpha) cosd(alpha) 0 0;
    0 0 1 0;
    0 0 0 1]; 
end