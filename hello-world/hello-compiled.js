var c=this;Math.floor(Math.random()*2147483648).toString(36);function e(a,b){function d(){}d.prototype=b.prototype;a.f=b.prototype;a.prototype=new d};function f(a){this.stack=Error().stack||"";if(a)this.message=String(a)}e(f,Error);function g(a){for(var b=1;b<arguments.length;b++){var d=String(arguments[b]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,d)}return a}function h(a,b){if(b)return a.replace(i,"&amp;").replace(j,"&lt;").replace(k,"&gt;").replace(l,"&quot;");else{if(!m.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(i,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(j,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(k,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(l,"&quot;");return a}}var i=/&/g,j=/</g,k=/>/g,l=/\"/g,m=/[&<>\"]/;function n(a,b){b.unshift(a);f.call(this,g.apply(null,b));b.shift();this.e=a}e(n,f);var o,p,q,r;function s(){return c.navigator?c.navigator.userAgent:null}r=q=p=o=false;var t;if(t=s()){var u=c.navigator;o=t.indexOf("Opera")==0;p=!o&&t.indexOf("MSIE")!=-1;q=!o&&t.indexOf("WebKit")!=-1;r=!o&&!q&&u.product=="Gecko"}var v=p,w=r,x=q,y="",z;if(o&&c.opera){var A=c.opera.version;y=typeof A=="function"?A():A}else{if(w)z=/rv\:([^\);]+)(\)|;)/;else if(v)z=/MSIE\s+([^\);]+)(\)|;)/;else if(x)z=/WebKit\/(\S+)/;if(z){var B=z.exec(s());y=B?B[1]:""}};var C;(C="ScriptEngine"in c&&c.ScriptEngine()=="JScript")&&(c.ScriptEngineMajorVersion(),c.ScriptEngineMinorVersion(),c.ScriptEngineBuildVersion());function D(a){this.a=C?[]:"";a!=null&&this.append.apply(this,arguments)}if(C){D.prototype.b=0;D.prototype.append=function(a,b){if(b==null)this.a[this.b++]=a;else{this.a.push.apply(this.a,arguments);this.b=this.a.length}return this}}else D.prototype.append=function(a,b){this.a+=a;if(b!=null)for(var d=1;d<arguments.length;d++)this.a+=arguments[d];return this};D.prototype.clear=function(){if(C)this.b=this.a.length=0;else this.a=""};
D.prototype.toString=function(){if(C){var a=this.a.join("");this.clear();a&&this.append(a);return a}else return this.a};function E(a){a={c:a,d:(new Date).getFullYear()};var b=new D;b.append('<h1 id="greeting">',h(String(a.c)),"</h1>The year is ",h(String(a.d)),".");a=b.toString();document.getElementById("hello").innerHTML=a}var F="example.sayHello".split("."),G=c;!(F[0]in G)&&G.execScript&&G.execScript("var "+F[0]);for(var H;F.length&&(H=F.shift());)if(!F.length&&E!==undefined)G[H]=E;else G=G[H]?G[H]:(G[H]={});