% Matriz de rotación alrededor de z 3x3

function R = R_z(alpha)
    R = [cosd(alpha) -sind(alpha) 0;
    sind(alpha) cosd(alpha) 0;
    0 0 1]; 
end