% Matriz de traslación 4x4

function D = D_t(x, y, z)
    D = [1 0 0 x;
    0 1 0 y;
    0 0 1 z;
    0 0 0 1];
end