% Matriz de rotación alrededor de z 3x3

function R = R_z(alpha)
    R = [cos(alpha) -sin(alpha) 0;
    sin(alpha) cos(alpha) 0;
    0 0 1]; 
end