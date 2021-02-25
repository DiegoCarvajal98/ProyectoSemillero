% Matriz de rotación alrededor de y 4x4

function R = R_y(beta) 
    R = [cos(beta) 0 sin(beta); 
    0 1 0;
    -sin(beta) 0 cos(beta)];
end