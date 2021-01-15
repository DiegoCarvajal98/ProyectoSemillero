% Matriz de rotación alrededor de y 4x4

function D_y = D_yrd(beta) 
    D_y = [cos(beta) 0 sin(beta) 0; 
    0 1 0 0;
    -sin(beta) 0 cos(beta) 0;
    0 0 0 1];
end