% Matriz de rotación alrededor de y 4x4

function D_y = D_yr(beta) 
    D_y = [cosd(beta) 0 sind(beta) 0; 
    0 1 0 0;
    -sind(beta) 0 cosd(beta) 0;
    0 0 0 1];
end