uniform sampler2D color0;
uniform float time;

varying vec3 s[4];

void main(){
    vec4 hat = texture2D(color0, vec2(0.0, 10.0));

    float t,b,c,h = .0;
    vec3 m,n,p = vec3(.2), d=normalize(.001*gl_FragCoord.rgb-p);
    for(int i=0;i<4;i++){
        t=2.0;
        for(int i=0;i<4;i++){
            b=dot(d,n=s[i]-p);
            c=b*b+.2-dot(n,n);
            if(b-c<t)
                if(c>.0){m=s[i];t=b-c;}
        }
        p+=t*d;
        d=reflect(d,n=normalize(p-m));
        h+=pow(n.x*n.x,44.)+n.x*n.x*.2;
    }
    vec4 color = vec4(h,h*h,h*h*h*h,h);
    gl_FragColor = color;
}
