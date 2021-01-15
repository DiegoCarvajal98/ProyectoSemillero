% Matriz de rotación alrededor de x0 4x4

function D_x = D_xrd(gamma)
    D_x = [1 0 0 0;
    0 cos(gamma) -sin(gamma) 0;
    0 sin(gamma) cos(gamma) 0;
    0 0 0 1];
end