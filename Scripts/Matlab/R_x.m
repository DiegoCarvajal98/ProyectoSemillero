% Matriz de rotación alrededor de x0 3x3

function R = R_x(gamma)
    R = [1 0 0 ;
    0 cos(gamma) -sin(gamma);
    0 sin(gamma) cos(gamma)];
end