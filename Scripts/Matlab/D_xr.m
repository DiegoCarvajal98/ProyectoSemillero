% Matriz de rotación alrededor de x0 4x4

function D_x = D_xr(gamma)
    D_x = [1 0 0 0;
    0 cosd(gamma) -sind(gamma) 0;
    0 sind(gamma) cosd(gamma) 0;
    0 0 0 1];
end