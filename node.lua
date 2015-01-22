gl.setup(NATIVE_WIDTH, NATIVE_HEIGHT)

sys.set_flag("slow_gc")

util.resource_loader{
    "shader31c3.frag";
    "noise.png";
    "tiles.png";
}

function node.render()
    local now = sys.now()

    local x = math.sin(now/62) * 320
    local y = math.cos(now/128) * 200

    gl.perspective(80 + math.cos(now/5) * 3, x + math.sin(now/14)*10, y + math.cos(now/14.4)*20, -100, x, y, 0)
    gl.rotate(math.cos(now/9)*5, 0, 0, 1)

    shader31c3:use{
        time = now / 1234.5;
        noise = noise;
        tile_res = {16, 16};
        res = {16.0 * 12, 16.0 * 12};
    }

    local size = 40
    tiles:draw(-16*size, -16*size, 16*size, 16*size)
end
