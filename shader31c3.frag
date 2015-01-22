uniform sampler2D Texture;
uniform sampler2D noise;
varying vec2 TexCoord;
uniform float time;
uniform vec2 res;
uniform vec2 tile_res;

const vec2 one = vec2(1.0, 1.0);

void main() {
    vec2 tcoord_res = TexCoord * res;
    vec2 noise_vec1 = vec2(0.0, time * 0.8);
    vec2 noise_vec2 = noise_vec1 + vec2(time * 0.9, 0.0);

    vec2 pos = floor(tcoord_res) / res;

    float foo = texture2D(noise, mod(pos * 41.0 + noise_vec1, one)).x;
    float bar = texture2D(noise, mod(pos * 5.0 + noise_vec2, one)).x;

    vec2 t = vec2(foo, bar);
    t = floor(t * tile_res) / tile_res;

    // gl_FragColor = vec4(t, 0.0, 1.0);
    gl_FragColor = vec4(texture2D(
        Texture, 
        mod(tcoord_res, one) / tile_res + t
    ).rgb, 1.0);
}
