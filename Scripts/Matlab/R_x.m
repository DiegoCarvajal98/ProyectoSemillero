% Matriz de rotación alrededor de x0 3x3

function R = R_x(gamma)
    R = [1 0 0 ;
    0 cosd(gamma) -sind(gamma);
    0 sind(gamma) cosd(gamma)];
end