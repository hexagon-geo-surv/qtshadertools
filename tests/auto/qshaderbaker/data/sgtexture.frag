#version 440

layout(location = 0) in vec2 qt_TexCoord;
layout(location = 0) out vec4 fragColor;

layout(std140, binding = 0) uniform buf {
    mat4 qt_Matrix;
    float opacity;
} ubuf;

layout(binding = 1) uniform sampler2D qt_Texture;
layout(binding = 2) uniform sampler2D t1;

void main()
{
    fragColor = texture(qt_Texture, qt_TexCoord) * ubuf.opacity * texture(t1, qt_TexCoord);
}
