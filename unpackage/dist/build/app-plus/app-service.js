var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'touchmove']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'phoneDirectory data-v-8eb5194e'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z([3,'data-v-8eb5194e'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'handlePhoneListIndex']]]]]]]],[[4],[[5],[[5],[1,'^reset']],[[4],[[5],[[4],[[5],[1,'handleReset']]]]]]]],[[4],[[5],[[5],[1,'^handleClick']],[[4],[[5],[[4],[[5],[1,'handleClick']]]]]]]]])
Z([[7],[3,'letter']])
Z([[7],[3,'phones']])
Z([[7],[3,'scrollAnimationOFF']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z(z[2])
Z(z[2])
Z(z[5])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'handleDatasetKey']]]]]]]],[[4],[[5],[[5],[1,'^scrollAnimationOFF']],[[4],[[5],[[4],[[5],[1,'handleScrollAnimationOFF']]]]]]]],[[4],[[5],[[5],[1,'^reset']],[[4],[[5],[[4],[[5],[1,'handleReset']]]]]]]]])
Z([[7],[3,'phoneListIndex']])
Z(z[8])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
Z([3,'__e'])
Z([3,'popup data-v-25a76df8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'content data-v-25a76df8'])
Z([[7],[3,'title']])
Z([[7],[3,'isFail']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'w-picker-cnt']],[[2,'?:'],[[7],[3,'showPicker']],[1,'show'],[1,'']]]])
Z([[2,'=='],[[7],[3,'mode']],[1,'linkage']])
Z([[2,'=='],[[7],[3,'mode']],[1,'half']])
Z([[2,'=='],[[7],[3,'mode']],[1,'date']])
Z([[2,'=='],[[7],[3,'mode']],[1,'yearMonth']])
Z([[2,'=='],[[7],[3,'mode']],[1,'dateTime']])
Z([[2,'=='],[[7],[3,'mode']],[1,'range']])
Z([[2,'=='],[[7],[3,'mode']],[1,'time']])
Z([[2,'=='],[[7],[3,'mode']],[1,'region']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'itemHeight']])
Z([[7],[3,'pickVal']])
Z([[2,'!'],[[7],[3,'hideArea']]])
Z([[2,'=='],[[7],[3,'mode']],[1,'selector']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limit']])
Z([[2,'=='],[[7],[3,'mode']],[1,'limitHour']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container-box'])
Z([[6],[[6],[[7],[3,'pickup']],[3,'authList']],[3,'orderConfirm']])
Z([[6],[[6],[[7],[3,'pickup']],[3,'authList']],[3,'boxConfirm']])
Z([3,'__e'])
Z([3,'index-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toNodelivery2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'on_order'])
Z([[2,'>'],[[6],[[7],[3,'order_num']],[3,'on_the_way_num']],[1,0]])
Z([[6],[[6],[[7],[3,'pickup']],[3,'authList']],[3,'inviteExchange']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i0__'])
Z([3,'provider'])
Z([[7],[3,'providerList']])
Z([3,'value'])
Z([[7],[3,'hasProvider']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'nodelivery-detail'])
Z([[6],[[7],[3,'orderDetailInfo']],[3,'is_have_back']])
Z([[2,'=='],[[6],[[7],[3,'orderDetailInfo']],[3,'is_have_back']],[1,1]])
Z([3,'footer-button'])
Z([[6],[[7],[3,'orderDetailInfo']],[3,'is_show_way_button']])
Z([[2,'=='],[[6],[[6],[[7],[3,'orderDetailInfo']],[3,'box_info']],[3,'status']],[1,5]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'node-number'])
Z([[2,'=='],[[7],[3,'pageStyle']],[1,1]])
Z([[2,'!='],[[6],[[7],[3,'selectList']],[3,'length']],[1,0]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'selector'])
Z([[4],[[5],[1,0]]])
Z(z[8])
Z([[7],[3,'selectList']])
Z([3,'#f00'])
Z([3,'1'])
Z(z[4])
Z(z[5])
Z(z[6])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'onConfirmTime']]]]]]]]])
Z([3,'date'])
Z(z[17])
Z([3,'2020'])
Z(z[19])
Z([3,'2017'])
Z(z[12])
Z([3,'2'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'boxOrderInfo']])
Z(z[26])
Z(z[5])
Z([3,'list-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'order_sn']])
Z(z[2])
Z(z[2])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'is_have_back']],[1,1]])
Z([[7],[3,'numberModelStatus']])
Z(z[37])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-a4643226'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^paramClick']],[[4],[[5],[[4],[[5],[1,'paramClick']]]]]]]]])
Z([[7],[3,'phones']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'itemList']])
Z(z[0])
Z([3,'index2'])
Z([3,'list'])
Z([[6],[[7],[3,'item']],[3,'box_list']])
Z(z[4])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'count']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'取消'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^succer']],[[4],[[5],[[4],[[5],[1,'succer']]]]]]]],[[4],[[5],[[5],[1,'^fail']],[[4],[[5],[[4],[[5],[1,'fail']]]]]]]]])
Z([1,true])
Z([[7],[3,'isShow']])
Z([[7],[3,'text']])
Z([[7],[3,'title']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'取消'])
Z([3,'确认收货'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^succer']],[[4],[[5],[[4],[[5],[1,'succer']]]]]]]],[[4],[[5],[[5],[1,'^fail']],[[4],[[5],[[4],[[5],[1,'fail']]]]]]]]])
Z([1,true])
Z([[7],[3,'isShow']])
Z([[7],[3,'text']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'orderdetail'])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'is_today']],[1,0]])
Z([3,'order-geo'])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'order_status']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'order_status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'order_status']],[1,2]])
Z([3,'order-info'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'orderInfo']],[3,'order_status']],[1,1]],[[2,'!='],[[6],[[7],[3,'orderInfo']],[3,'order_confirm_time']],[1,'']]])
Z(z[4])
Z(z[3])
Z([3,'__l'])
Z([3,'__e'])
Z(z[11])
Z([3,'取消'])
Z([3,'确认收货'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^succer']],[[4],[[5],[[4],[[5],[1,'succer']]]]]]]],[[4],[[5],[[5],[1,'^fail']],[[4],[[5],[[4],[[5],[1,'fail']]]]]]]]])
Z([1,true])
Z([[7],[3,'isShow']])
Z([[7],[3,'text']])
Z([3,'1'])
Z(z[10])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'^succer']],[[4],[[5],[[4],[[5],[1,'succer2']]]]]]]]])
Z([[7],[3,'isFail']])
Z([[7],[3,'isShow2']])
Z([[7],[3,'text2']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/directory/phone-alphabet.wxml','./components/directory/phone-directory.wxml','./components/directory/phone-list.wxml','./components/popup.wxml','./components/w-picker/w-picker.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/order_list/order_details/order_details.wxml','./pages/order_list/order_list.wxml','./pages/pickup/pickup.wxml','./pages/sweep/affirm.wxml','./pages/sweep/invite.wxml','./pages/sweep/user_fetch.wxml','./pages/userOrderDetile/orderList.wxml','./pages/userOrderDetile/userOrderDetile.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_n('view')
_rz(z,oD,'class',0,e,s,gg)
var fE=_mz(z,'phone-list',['bind:__l',1,'bind:change',1,'bind:handleClick',2,'bind:reset',3,'class',4,'data-event-opts',5,'letter',6,'phones',7,'scrollAnimationOFF',8,'vueId',9],[],e,s,gg)
_(oD,fE)
var cF=_mz(z,'phone-alphabet',['bind:__l',11,'bind:change',1,'bind:reset',2,'bind:scrollAnimationOFF',3,'class',4,'data-event-opts',5,'phoneListIndex',6,'phones',7,'vueId',8],[],e,s,gg)
_(oD,cF)
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cI=_v()
_(r,cI)
if(_oz(z,0,e,s,gg)){cI.wxVkey=1
var oJ=_mz(z,'view',['catchtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',4,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,5,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,6,e,s,gg)){tM.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
_(oJ,lK)
_(cI,oJ)
}
cI.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var bO=_n('view')
_rz(z,bO,'class',0,e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,1,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,2,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(bO,oR)
if(_oz(z,3,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(bO,fS)
if(_oz(z,4,e,s,gg)){fS.wxVkey=1
}
var cT=_v()
_(bO,cT)
if(_oz(z,5,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(bO,hU)
if(_oz(z,6,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(bO,oV)
if(_oz(z,7,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(bO,cW)
if(_oz(z,8,e,s,gg)){cW.wxVkey=1
var t1=_mz(z,'picker-view',['bindchange',9,'data-event-opts',1,'indicatorStyle',2,'value',3],[],e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,13,e,s,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
_(cW,t1)
}
var oX=_v()
_(bO,oX)
if(_oz(z,14,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(bO,lY)
if(_oz(z,15,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(bO,aZ)
if(_oz(z,16,e,s,gg)){aZ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
aZ.wxXCkey=1
_(r,bO)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,1,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(o4,o6)
if(_oz(z,2,e,s,gg)){o6.wxVkey=1
}
var c8=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2,'data-style',3],[],e,s,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,7,e,s,gg)){h9.wxVkey=1
}
h9.wxXCkey=1
_(o4,c8)
var f7=_v()
_(o4,f7)
if(_oz(z,8,e,s,gg)){f7.wxVkey=1
}
x5.wxXCkey=1
o6.wxXCkey=1
f7.wxXCkey=1
_(r,o4)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cAB=_v()
_(r,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_v()
_(tEB,bGB)
if(_oz(z,4,aDB,lCB,gg)){bGB.wxVkey=1
}
bGB.wxXCkey=1
return tEB
}
cAB.wxXCkey=2
_2z(z,2,oBB,e,s,gg,cAB,'provider','__i0__','value')
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var xIB=_n('view')
_rz(z,xIB,'class',0,e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,1,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,2,e,s,gg)){fKB.wxVkey=1
}
var cLB=_n('view')
_rz(z,cLB,'class',3,e,s,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,4,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,5,e,s,gg)){oNB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
_(xIB,cLB)
oJB.wxXCkey=1
fKB.wxXCkey=1
_(r,xIB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oPB=_n('view')
_rz(z,oPB,'class',0,e,s,gg)
var tSB=_n('view')
_rz(z,tSB,'class',1,e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,2,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(tSB,bUB)
if(_oz(z,3,e,s,gg)){bUB.wxVkey=1
var oVB=_mz(z,'w-picker',['bind:__l',4,'bind:confirm',1,'class',2,'data-event-opts',3,'data-ref',4,'defaultVal',5,'mode',6,'selectList',7,'themeColor',8,'vueId',9],[],e,s,gg)
_(bUB,oVB)
}
eTB.wxXCkey=1
bUB.wxXCkey=1
bUB.wxXCkey=3
_(oPB,tSB)
var xWB=_mz(z,'w-picker',['bind:__l',14,'bind:confirm',1,'class',2,'current',3,'data-event-opts',4,'data-ref',5,'disabledAfter',6,'endYear',7,'mode',8,'startYear',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(oPB,xWB)
var oXB=_v()
_(oPB,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_mz(z,'view',['bindtap',30,'class',1,'data-event-opts',2,'data-order-sn',3],[],h1B,cZB,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,34,h1B,cZB,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,35,h1B,cZB,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(o4B,t7B)
if(_oz(z,36,h1B,cZB,gg)){t7B.wxVkey=1
}
l5B.wxXCkey=1
a6B.wxXCkey=1
t7B.wxXCkey=1
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=2
_2z(z,28,fYB,e,s,gg,oXB,'item','index','index')
var lQB=_v()
_(oPB,lQB)
if(_oz(z,37,e,s,gg)){lQB.wxVkey=1
}
var aRB=_v()
_(oPB,aRB)
if(_oz(z,38,e,s,gg)){aRB.wxVkey=1
}
lQB.wxXCkey=1
aRB.wxXCkey=1
_(r,oPB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var b9B=_mz(z,'directory',['bind:__l',0,'bind:paramClick',1,'class',1,'data-event-opts',2,'phones',3,'vueId',4],[],e,s,gg)
_(r,b9B)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var xAC=_v()
_(r,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_v()
_(hEC,cGC)
var oHC=function(aJC,lIC,tKC,gg){
var bMC=_v()
_(tKC,bMC)
if(_oz(z,8,aJC,lIC,gg)){bMC.wxVkey=1
}
bMC.wxXCkey=1
return tKC
}
cGC.wxXCkey=2
_2z(z,6,oHC,cDC,fCC,gg,cGC,'list','index2','index2')
return hEC
}
xAC.wxXCkey=2
_2z(z,2,oBC,e,s,gg,xAC,'item','index','index')
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var xOC=_mz(z,'popup',['bind:__l',0,'bind:fail',1,'bind:succer',1,'cancal',2,'data-event-opts',3,'isFail',4,'isShow',5,'text',6,'title',7,'vueId',8],[],e,s,gg)
_(r,xOC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var fQC=_mz(z,'popup',['bind:__l',0,'bind:fail',1,'bind:succer',1,'cancal',2,'confirm',3,'data-event-opts',4,'isFail',5,'isShow',6,'text',7,'vueId',8],[],e,s,gg)
_(r,fQC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oTC=_n('view')
_rz(z,oTC,'class',0,e,s,gg)
var cUC=_v()
_(oTC,cUC)
if(_oz(z,1,e,s,gg)){cUC.wxVkey=1
}
var lWC=_n('view')
_rz(z,lWC,'class',2,e,s,gg)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,3,e,s,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(lWC,tYC)
if(_oz(z,4,e,s,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(lWC,eZC)
if(_oz(z,5,e,s,gg)){eZC.wxVkey=1
}
aXC.wxXCkey=1
tYC.wxXCkey=1
eZC.wxXCkey=1
_(oTC,lWC)
var b1C=_n('view')
_rz(z,b1C,'class',6,e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,7,e,s,gg)){o2C.wxVkey=1
}
var x3C=_v()
_(b1C,x3C)
if(_oz(z,8,e,s,gg)){x3C.wxVkey=1
}
o2C.wxXCkey=1
x3C.wxXCkey=1
_(oTC,b1C)
var oVC=_v()
_(oTC,oVC)
if(_oz(z,9,e,s,gg)){oVC.wxVkey=1
}
var o4C=_mz(z,'popup',['bind:__l',10,'bind:fail',1,'bind:succer',2,'cancal',3,'confirm',4,'data-event-opts',5,'isFail',6,'isShow',7,'text',8,'vueId',9],[],e,s,gg)
_(oTC,o4C)
var f5C=_mz(z,'popup',['bind:__l',20,'bind:succer',1,'data-event-opts',2,'isFail',3,'isShow',4,'text',5,'vueId',6],[],e,s,gg)
_(oTC,f5C)
cUC.wxXCkey=1
oVC.wxXCkey=1
_(r,oTC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



<<<<<<< HEAD
__wxAppCode__['app.json']={"pages":["pages/index/index","pages/login/login","pages/order_list/order_list","pages/pickup/pickup","pages/sweep/user_fetch","pages/sweep/affirm","pages/sweep/invite","pages/order_list/order_details/order_details","pages/userOrderDetile/orderList","pages/userOrderDetile/userOrderDetile"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"提货助手","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"提货助手","compilerVersion":"2.3.7","usingComponents":{"popup":"/components/popup"}};
=======
__wxAppCode__['app.json']={"pages":["pages/index/index","pages/login/login","pages/order_list/order_list","pages/pickup/pickup","pages/sweep/user_fetch","pages/sweep/affirm","pages/sweep/invite","pages/order_list/order_details/order_details","pages/userOrderDetile/userOrderDetile"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"提货助手","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"提货助手","compilerVersion":"2.2.2","usingComponents":{}};
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/directory/phone-alphabet.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/directory/phone-alphabet.wxml']=$gwx('./components/directory/phone-alphabet.wxml');

__wxAppCode__['components/directory/phone-directory.json']={"usingComponents":{"phone-list":"/components/directory/phone-list","phone-alphabet":"/components/directory/phone-alphabet"},"component":true};
__wxAppCode__['components/directory/phone-directory.wxml']=$gwx('./components/directory/phone-directory.wxml');

__wxAppCode__['components/directory/phone-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/directory/phone-list.wxml']=$gwx('./components/directory/phone-list.wxml');

__wxAppCode__['components/popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/popup.wxml']=$gwx('./components/popup.wxml');

__wxAppCode__['components/w-picker/w-picker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/w-picker/w-picker.wxml']=$gwx('./components/w-picker/w-picker.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"提货助手","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/order_list/order_details/order_details.json']={"navigationBarTitleText":"提货订单详情","usingComponents":{}};
__wxAppCode__['pages/order_list/order_details/order_details.wxml']=$gwx('./pages/order_list/order_details/order_details.wxml');

__wxAppCode__['pages/order_list/order_list.json']={"usingComponents":{"w-picker":"/components/w-picker/w-picker"}};
__wxAppCode__['pages/order_list/order_list.wxml']=$gwx('./pages/order_list/order_list.wxml');

__wxAppCode__['pages/pickup/pickup.json']={"navigationBarTitleText":"提货地点","usingComponents":{"directory":"/components/directory/phone-directory"}};
__wxAppCode__['pages/pickup/pickup.wxml']=$gwx('./pages/pickup/pickup.wxml');

__wxAppCode__['pages/sweep/affirm.json']={"navigationBarTitleText":"到货确认","usingComponents":{}};
__wxAppCode__['pages/sweep/affirm.wxml']=$gwx('./pages/sweep/affirm.wxml');

__wxAppCode__['pages/sweep/invite.json']={"navigationBarTitleText":"邀请码核销","usingComponents":{"popup":"/components/popup"}};
__wxAppCode__['pages/sweep/invite.wxml']=$gwx('./pages/sweep/invite.wxml');

__wxAppCode__['pages/sweep/user_fetch.json']={"navigationBarTitleText":"用户取件","usingComponents":{"popup":"/components/popup"}};
__wxAppCode__['pages/sweep/user_fetch.wxml']=$gwx('./pages/sweep/user_fetch.wxml');

__wxAppCode__['pages/userOrderDetile/orderList.json']={"navigationBarTitleText":"提货订单列表","usingComponents":{}};
__wxAppCode__['pages/userOrderDetile/orderList.wxml']=$gwx('./pages/userOrderDetile/orderList.wxml');

__wxAppCode__['pages/userOrderDetile/userOrderDetile.json']={"navigationBarTitleText":"订单详情","usingComponents":{"popup":"/components/popup"}};
__wxAppCode__['pages/userOrderDetile/userOrderDetile.wxml']=$gwx('./pages/userOrderDetile/userOrderDetile.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1239:function(e,t,n){"use strict";n.r(t);var o=n("22b6");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("c79b");var u,c,a=n("2877"),l=Object(a["a"])(o["default"],u,c,!1,null,null,null);t["default"]=l.exports},"22b6":function(e,t,n){"use strict";n.r(t);var o=n("3b30"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},"2cc1":function(e,t,n){},"3b30":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){e.removeStorageSync("getExpressPickupId"),console.log(n("App Launch"," at App.vue:5"))},onShow:function(){console.log(n("App Show"," at App.vue:8"))},onHide:function(){console.log(n("App Hide"," at App.vue:11"))}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},a25e:function(e,t,n){"use strict";(function(e){n("fae8"),n("921b");var t=f(n("66fd")),o=f(n("1239")),r=f(n("27e2")),u=f(n("69dc")),c=l(n("2c48")),a=l(n("bd7b"));function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){return n.e("components/popup").then(n.bind(null,"5b81"))};t.default.config.productionTip=!1,t.default.prototype.$http=r.default,t.default.prototype.$URL=u.default,t.default.prototype.$tool=a,t.default.prototype.$common=c,t.default.component("popup",d),o.default.mpType="app";var b=new t.default(p({},o.default));e(b).$mount()}).call(this,n("6e42")["createApp"])},c79b:function(e,t,n){"use strict";var o=n("2cc1"),r=n.n(o);r.a}},[["a25e","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{4631:function(n,e,o){},"70a6":function(n,e,o){"use strict";o.r(e);var t=o("c14c");for(var u in t)"default"!==u&&function(n){o.d(e,n,function(){return t[n]})}(u);o("d247");var c,a,r=o("2877"),i=Object(r["a"])(t["default"],c,a,!1,null,null,null);e["default"]=i.exports},"8a6c":function(n,e,o){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o("ec6f"),c={onLaunch:function(){n.removeStorageSync("getExpressPickupId"),console.log(t("App Launch"," at App.vue:6")),plus.runtime.getProperty(plus.runtime.appid,function(n){var e=n.versionCode;(0,u.checkUpdater)(e)})},onShow:function(){console.log(t("App Show"," at App.vue:17"))},onHide:function(){console.log(t("App Hide"," at App.vue:20"))}};e.default=c}).call(this,o("6e42")["default"],o("0de9")["default"])},c14c:function(n,e,o){"use strict";o.r(e);var t=o("8a6c"),u=o.n(t);for(var c in t)"default"!==c&&function(n){o.d(e,n,function(){return t[n]})}(c);e["default"]=u.a},d247:function(n,e,o){"use strict";var t=o("4631"),u=o.n(t);u.a}},[["8784","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var n, o, p = t[0], a = t[1], u = t[2], l = 0, s = []; l < p.length; l++) {
      o = p[l], i[o] && s.push(i[o][0]), i[o] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    f && f(t);

    while (s.length) {
      s.shift()();
    }

    return c.push.apply(c, u || []), r();
  }

  function r() {
    for (var e, t = 0; t < c.length; t++) {
      for (var r = c[t], n = !0, o = 1; o < r.length; o++) {
        var p = r[o];
        0 !== i[p] && (n = !1);
      }

      n && (c.splice(t--, 1), e = a(a.s = r[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      c = [];

  function p(e) {
    return a.p + "" + e + ".js";
  }

  function a(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, a), r.l = !0, r.exports;
  }

  a.e = function (e) {
    var t = [],
        r = {
      "components/popup": 1,
      "components/w-picker/w-picker": 1,
      "components/directory/phone-directory": 1,
      "components/directory/phone-alphabet": 1,
      "components/directory/phone-list": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise(function (t, r) {
      for (var n = ({
        "components/popup": "components/popup",
        "components/w-picker/w-picker": "components/w-picker/w-picker",
        "components/directory/phone-directory": "components/directory/phone-directory",
        "components/directory/phone-alphabet": "components/directory/phone-alphabet",
        "components/directory/phone-list": "components/directory/phone-list"
      }[e] || e) + ".wxss", i = a.p + n, c = document.getElementsByTagName("link"), p = 0; p < c.length; p++) {
        var u = c[p],
            l = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (l === n || l === i)) return t();
      }

      var s = document.getElementsByTagName("style");

      for (p = 0; p < s.length; p++) {
        u = s[p], l = u.getAttribute("data-href");
        if (l === n || l === i) return t();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
        var n = t && t.target && t.target.src || i,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        c.request = n, delete o[e], f.parentNode.removeChild(f), r(c);
      }, f.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(f);
    }).then(function () {
      o[e] = 0;
    }));
    var n = i[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var c = new Promise(function (t, r) {
        n = i[e] = [t, r];
      });
      t.push(n[2] = c);
      var u,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, a.nc && l.setAttribute("nonce", a.nc), l.src = p(e), u = function u(t) {
        l.onerror = l.onload = null, clearTimeout(s);
        var r = i[e];

        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + o + ")");
            c.type = n, c.request = o, r[1](c);
          }

          i[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        u({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = u, document.head.appendChild(l);
    }
    return Promise.all(t);
  }, a.m = e, a.c = n, a.d = function (e, t, r) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (a.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      a.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(t, "a", t), t;
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var u = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = u.push.bind(u);
  u.push = t, u = u.slice();

  for (var s = 0; s < u.length; s++) {
    t(u[s]);
  }

  var f = l;
  r();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"00b4":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u={pages:{"pages/index/index":{navigationBarTitleText:"提货助手"},"pages/login/login":{navigationBarTitleText:"登录"},"pages/order_list/order_list":{},"pages/pickup/pickup":{navigationBarTitleText:"提货地点"},"pages/sweep/user_fetch":{navigationBarTitleText:"用户取件"},"pages/sweep/affirm":{navigationBarTitleText:"到货确认"},"pages/sweep/invite":{navigationBarTitleText:"邀请码核销"},"pages/order_list/order_details/order_details":{navigationBarTitleText:"提货订单详情"},"pages/userOrderDetile/orderList":{navigationBarTitleText:"提货订单列表"},"pages/userOrderDetile/userOrderDetile":{navigationBarTitleText:"订单详情"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"提货助手",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#F8F8F8"}};l.default=u},"0de9":function(e,l,a){"use strict";function u(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function t(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var t=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(t){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=u(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),n="";if(t.length>1){var v=t.pop();n=t.join("---COMMA---"),0===v.indexOf(" at ")?n+=v:n+="---COMMA---"+v}else n=t[0];return n}Object.defineProperty(l,"__esModule",{value:!0}),l.default=t},"27e2":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=t(a("8489"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){v(e,l,a[l])})}return e}function v(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var r={};function b(e){return n({},e,{header:{isExp:!0}})}r.upload=function(e){return u.default.upload("url",{filePath:e,name:"file"})},r.getToken=function(e,l){return u.default.post("user/checkLogin",e,l)},r.thirdLogin=function(e,l){return u.default.post("user/thirdLogin?oauth="+e.suffix,e,l)},r.updateUser=function(e,l){return u.default.post("user/getWXUserInfo",e,l)},r.getLoacl=function(e,l){return u.default.post("pickup/getpickupr",e,b(l))},r.appLogin=function(e,l){return u.default.post("oauth/login",e,l)},r.getExpressUserInfo=function(e,l){return u.default.post("user/getExpressUserInfo",e,l)},r.getUnclaimednum=function(e,l){return u.default.post("takedelivery/unclaimednum",e,b(l))},r.getPickupList=function(e,l){return u.default.post("pickup/userPickUpList",e,b(l))},r.getUserInfo=function(e,l){return u.default.post("index/userInfo",e,l)},r.getPickUpList=function(e,l){return u.default.post("pickup/userPickUpList",e,b(l))},r.getUnclaimedGoodsInfo=function(e,l){return u.default.post("takedelivery/unclaimedGoodsInfo",e,b(l))},r.getUnclaimedInfo=function(e,l){return u.default.post("takedelivery/unclaimedInfo",e,b(l))},r.getOrderDetail=function(e,l){return u.default.post("takedelivery/orderDetail",e,b(l))},r.getWarehouse=function(e,l){return u.default.post("takedelivery/unclaimedBackToWare",e,b(l))},r.getOrder=function(e,l){return u.default.post("takedelivery/getOrder",e,b(l))},r.getConfirmOrder=function(e,l){return u.default.post("takedelivery/confirmorder",e,b(l))},r.getboxlist=function(e,l){return u.default.post("takedelivery/getboxlist",e,b(l))},r.getConfirmbox=function(e,l){return u.default.post("takedelivery/confirmbox",e,b(l))},r.getInvitation=function(e,l){return u.default.post("InviteActivityReceiveList/exchange",e,l)};var o=r;l.default=o},2877:function(e,l,a){"use strict";function u(e,l,a,u,t,n,v,r){var b,o="function"===typeof e?e.options:e;if(l&&(o.render=l,o.staticRenderFns=a,o._compiled=!0),u&&(o.functional=!0),n&&(o._scopeId="data-v-"+n),v?(b=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(v)},o._ssrRegister=b):t&&(b=r?function(){t.call(this,this.$root.$options.shadowRoot)}:t),b)if(o.functional){o._injectStyles=b;var i=o.render;o.render=function(e,l){return b.call(l),i(e,l)}}else{var s=o.beforeCreate;o.beforeCreate=s?[].concat(s,b):[b]}return{exports:e,options:o}}a.d(l,"a",function(){return u})},"2c48":function(e,l,a){"use strict";(function(e,a){function u(l){e.showToast({title:l,icon:"none",duration:2e3})}function t(e,l,a){wx.showModal({title:"",content:e,confirmText:l,confirmColor:"#eb3c39",cancelText:"取消",cancelColor:"#030303",success:a})}function n(l){e.makePhoneCall({phoneNumber:l,success:function(e){console.log(a("成功"," at utils\\common.js:28"))},fail:function(e){console.log(a("失败"," at utils\\common.js:31"))}})}function v(){e.showLoading({title:"清除中"}),e.getStorageInfo({success:function(l){var a=l.keys.length;l.keys.forEach(function(l){e.removeStorage({key:l,success:function(){a--,0==a&&(e.hideLoading(),e.showToast({title:"清除成功",icon:"none"}))}})})},fail:function(){e.hideLoading(),u("清除成功")}})}function r(l,a,u,t){var n={timeStamp:String(l.timeStamp),nonceStr:String(l.nonceStr),package:String(l.package),signType:String(l.signType),paySign:String(l.sign),success:a,fail:u,complete:t};e.requestPayment(n)}Object.defineProperty(l,"__esModule",{value:!0}),l.toast=u,l.showModal=t,l.phoneCall=n,l.clearAllStorage=v,l.setPay=r}).call(this,a("6e42")["default"],a("0de9")["default"])},"5bd2":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=t(a("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){s(e,l,a[l])})}return e}function v(e,l,a,u,t,n,v){try{var r=e[n](v),b=r.value}catch(o){return void a(o)}r.done?l(b):Promise.resolve(b).then(u,t)}function r(e){return function(){var l=this,a=arguments;return new Promise(function(u,t){var n=e.apply(l,a);function r(e){v(n,u,t,r,b,"next",e)}function b(e){v(n,u,t,r,b,"throw",e)}r(void 0)})}}function b(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function o(e,l){for(var a=0;a<l.length;a++){var u=l[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function i(e,l,a){return l&&o(e.prototype,l),a&&o(e,a),e}function s(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var c=function(){function l(){var e=this;b(this,l),s(this,"config",{baseUrl:"",header:{"content-type":"application/x-www-form-urlencoded"},method:"GET",dataType:"json",responseType:"text"}),s(this,"interceptor",{request:function(l){l&&(e.requestBeforeFun=l)},response:function(l,a){l&&a&&(e.requestComFun=l,e.requestComFail=a)}})}return i(l,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var a=r(u.default.mark(function a(){var t,v=this,r=arguments;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},t.baseUrl=this.config.baseUrl,t.dataType=t.dataType||this.config.dataType,t.responseType=t.responseType||this.config.responseType,t.url=t.url||"",t.data=t.data||{},t.params=t.params||{},t.header=t.header||this.config.header,t.method=t.method||this.config.method,a.abrupt("return",new Promise(function(a,u){var r=!0,b={};t.complete=function(e){e.config=b,v.validateStatus(e.statusCode)?(e=v.requestComFun(e),a(e)):(e=v.requestComFail(e),u(e))};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a={errMsg:e,config:l};u(a),r=!1};b=n({},v.requestBeforeFun(t,o));var i=n({},b);if(r){var s=l.posUrl(t.url)?t.url:t.baseUrl+t.url;if("{}"!==JSON.stringify(t.params)){var c=l.addQueryString(t.params);s+=-1===s.indexOf("?")?"?".concat(c):"&".concat(c)}i.url=s,i.header.token||delete i.header["token"],e.request(i)}}));case 10:case"end":return a.stop()}},a,this)}));function t(){return a.apply(this,arguments)}return t}()},{key:"get",value:function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(n({url:e,method:"GET"},l))}},{key:"post",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:e,data:l,method:"POST"},a))}},{key:"put",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:e,data:l,method:"PUT"},a))}},{key:"delete",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:e,data:l,method:"DELETE"},a))}},{key:"connect",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:e,data:l,method:"CONNECT"},a))}},{key:"head",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:e,data:l,method:"HEAD"},a))}},{key:"options",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:e,data:l,method:"OPTIONS"},a))}},{key:"trace",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(n({url:e,data:l,method:"TRACE"},a))}},{key:"upload",value:function(a,u){var t=this,v=u.files,r=u.filePath,b=u.name,o=u.header,i=u.formData;return new Promise(function(u,s){var c=!0,f={},p={baseUrl:t.config.baseUrl,url:a,files:v,filePath:r,method:"UPLOAD",name:b,header:o||t.config.header,formData:i,complete:function(e){e.config=f,200===e.statusCode?(e=t.requestComFun(e),u(e)):(e=t.requestComFail(e),s(e))}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,a={errMsg:e,config:l};s(a),c=!1};f=n({},t.requestBeforeFun(p,h));var d=n({},f);c&&(d.url=l.posUrl(a)?a:t.config.baseUrl+a,e.uploadFile(d))})}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var l="";return Object.keys(e).forEach(function(a){l+=a+"="+e[a]+"&"}),l.substring(0,l.length-1)}}]),l}();l.default=c}).call(this,a("6e42")["default"])},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0671":function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("3128"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"0de9":function(e,l,a){"use strict";function u(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function t(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var t=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(t){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=u(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),v="";if(t.length>1){var n=t.pop();v=t.join("---COMMA---"),0===n.indexOf(" at ")?v+=n:v+="---COMMA---"+n}else v=t[0];return v}Object.defineProperty(l,"__esModule",{value:!0}),l.default=t},1125:function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("ccbf"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"23ca":function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("14cf"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"275a":function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("a474"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"27af":function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("3fea"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},2877:function(e,l,a){"use strict";function u(e,l,a,u,t,v,n,r){var b,o="function"===typeof e?e.options:e;if(l&&(o.render=l,o.staticRenderFns=a,o._compiled=!0),u&&(o.functional=!0),v&&(o._scopeId="data-v-"+v),n?(b=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},o._ssrRegister=b):t&&(b=r?function(){t.call(this,this.$root.$options.shadowRoot)}:t),b)if(o.functional){o._injectStyles=b;var i=o.render;o.render=function(e,l){return b.call(l),i(e,l)}}else{var c=o.beforeCreate;o.beforeCreate=c?[].concat(c,b):[b]}return{exports:e,options:o}}a.d(l,"a",function(){return u})},"431f":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=t(a("d764"));function t(e){return e&&e.__esModule?e:{default:e}}function v(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){n(e,l,a[l])})}return e}function n(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var r={};function b(e){return v({},e,{header:{isExp:!0}})}r.upload=function(e){return u.default.upload("url",{filePath:e,name:"file"})},r.getToken=function(e,l){return u.default.post("user/checkLogin",e,l)},r.thirdLogin=function(e,l){return u.default.post("user/thirdLogin?oauth="+e.suffix,e,l)},r.updateUser=function(e,l){return u.default.post("user/getWXUserInfo",e,l)},r.getLoacl=function(e,l){return u.default.post("pickup/getpickupr",e,b(l))},r.appLogin=function(e,l){return u.default.post("oauth/login",e,l)},r.getExpressUserInfo=function(e,l){return u.default.post("user/getExpressUserInfo",e,l)},r.getUnclaimednum=function(e,l){return u.default.post("takedelivery/unclaimednum",e,b(l))},r.getPickupList=function(e,l){return u.default.post("pickup/userPickUpList",e,b(l))},r.getUserInfo=function(e,l){return u.default.post("index/userInfo",e,l)},r.getPickUpList=function(e,l){return u.default.post("pickup/userPickUpList",e,b(l))},r.getUnclaimedGoodsInfo=function(e,l){return u.default.post("takedelivery/unclaimedGoodsInfo",e,b(l))},r.getUnclaimedInfo=function(e,l){return u.default.post("takedelivery/unclaimedInfo",e,b(l))},r.getOrderDetail=function(e,l){return u.default.post("takedelivery/orderDetail",e,b(l))},r.getWarehouse=function(e,l){return u.default.post("takedelivery/unclaimedBackToWare",e,b(l))},r.getOrder=function(e,l){return u.default.post("takedelivery/getOrder",e,b(l))},r.getConfirmOrder=function(e,l){return u.default.post("takedelivery/confirmorder",e,b(l))},r.getboxlist=function(e,l){return u.default.post("takedelivery/getboxlist",e,b(l))},r.getConfirmbox=function(e,l){return u.default.post("takedelivery/confirmbox",e,b(l))},r.getInvitation=function(e,l){return u.default.post("InviteActivityReceiveList/exchange",e,l)};var o=r;l.default=o},6484:function(e,l,a){"use strict";(function(e,u){Object.defineProperty(l,"__esModule",{value:!0}),l.clearAllStorage=s,l.uuid=f,l.sortData=p,l.setUserInfo=l.getRouter=l.configHandle=l.setStorageSync=l.getSysteminfo=l.getStorageSync=l.WxSilentLogin=l.getQRcode=l.getTokenStorage=l.setTokenStorage=void 0;var t=v(a("431f"));function v(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){r(e,l,a[l])})}return e}function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var b=function(l){e.setStorageSync("X-Authorization",l)};l.setTokenStorage=b;var o=function(){var l="";try{l=e.getStorageSync("X-Authorization")}catch(a){}return l};l.getTokenStorage=o;var i=function(){e.scanCode({onlyFromCamera:!0,success:function(e){return console.log(u(e," at utils\\tool.js:25")),e.result},fail:function(e){}})};l.getQRcode=i;var c=function(l){e.login({provider:"weixin",success:function(a){console.log(u(a," at utils\\tool.js:39")),t.default.getToken({oauthCode:a.code}).then(function(a){e.getUserInfo({provider:"weixin",success:function(e){b(a.data.result.token),y("userInfo",e.rawData),y("isLogin",!0),l(e.rawData)},fail:function(){e.reLaunch({url:"../../pages/login/login"})}})})},fail:function(){e.reLaunch({url:"../../pages/login/login"})}})};function s(){e.showLoading({title:"清除中"}),e.getStorageInfo({success:function(l){var a=l.keys.length;l.keys.forEach(function(l){e.removeStorage({key:l,success:function(){a--,0==a&&(e.hideLoading(),e.showToast({title:"清除成功",icon:"none"}))}})})},fail:function(){e.hideLoading(),toast("清除成功")}})}function f(e,l){var a,u,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),v=[];if(l=l||t.length,e)for(a=0;a<e;a++)v[a]=t[0|Math.random()*l];else for(v[8]=v[13]=v[18]=v[23]="-",v[14]="4",a=0;a<36;a++)v[a]||(u=0|16*Math.random(),v[a]=t[19==a?3&u|8:u]);return v.join("")}function p(e,l){for(var a=/^[A-Z]$/,u=[],t="",v=0;v<e.length;v++)u["#"]=[],t=e[v][l].slice(0,1).toUpperCase(),a.test(t)||(t="#"),t in u||(u[t]=[]),u[t].push(e[v]);var n=[];for(var r in u)n.push({letter:r,list:u[r]});n.sort(function(e,l){return e.letter.charCodeAt(0)-l.letter.charCodeAt(0)});n[0];n.splice(0,1);for(var b={},o=0;o<n.length;o++)b[n[o].letter]=n[o].list;return n}l.WxSilentLogin=c;var d=function(l){var a=null;try{a=e.getStorageSync(l)}catch(u){}return a};l.getStorageSync=d;var h=function(l){var a=d(l);return a||e.getSystemInfo({success:function(u){return y("systemInfo",u),a=e.getStorageSync(l),JSON.stringify(a)}}),JSON.stringify(a)};l.getSysteminfo=h;var y=function(l,a){e.setStorageSync(l,a)};l.setStorageSync=y;var g=function(e){return e.header=n({},e.header,{"X-Authorization":o()}),e};l.configHandle=g;var m=function(e){var l=getCurrentPages(),a=l[l.length-Number(e)];return a.$vm};l.getRouter=m;var _=function(l){e.setStorageSync("info",l)};l.setUserInfo=_}).call(this,a("6e42")["default"],a("0de9")["default"])},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
<<<<<<< HEAD
var a=Object.freeze({});function u(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function v(e){return!1===e}function r(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function b(e){return null!==e&&"object"===typeof e}var o=Object.prototype.toString;function i(e){return"[object Object]"===o.call(e)}function s(e){return"[object RegExp]"===o.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return t(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||i(e)&&e.toString===o?JSON.stringify(e,null,2):String(e)}function h(e){var l=parseFloat(e);return isNaN(l)?e:l}function d(e,l){for(var a=Object.create(null),u=e.split(","),t=0;t<u.length;t++)a[u[t]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}d("slot,component",!0);var g=d("key,ref,slot,slot-scope,is");function y(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var _=Object.prototype.hasOwnProperty;function m(e,l){return _.call(e,l)}function w(e){var l=Object.create(null);return function(a){var u=l[a];return u||(l[a]=e(a))}}var O=/-(\w)/g,k=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),S=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),$=/\B([A-Z])/g,x=w(function(e){return e.replace($,"-$1").toLowerCase()});function A(e,l){function a(a){var u=arguments.length;return u?u>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function j(e,l){return e.bind(l)}var D=Function.prototype.bind?j:A;function E(e,l){l=l||0;var a=e.length-l,u=new Array(a);while(a--)u[a]=e[a+l];return u}function P(e,l){for(var a in l)e[a]=l[a];return e}function T(e){for(var l={},a=0;a<e.length;a++)e[a]&&P(l,e[a]);return l}function C(e,l,a){}var I=function(e,l,a){return!1},N=function(e){return e};function R(e,l){if(e===l)return!0;var a=b(e),u=b(l);if(!a||!u)return!a&&!u&&String(e)===String(l);try{var t=Array.isArray(e),n=Array.isArray(l);if(t&&n)return e.length===l.length&&e.every(function(e,a){return R(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(t||n)return!1;var v=Object.keys(e),r=Object.keys(l);return v.length===r.length&&v.every(function(a){return R(e[a],l[a])})}catch(o){return!1}}function U(e,l){for(var a=0;a<e.length;a++)if(R(e[a],l))return a;return-1}function M(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var L=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:C,parsePlatformTagName:N,mustUseProp:I,async:!0,_lifecycleHooks:F},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function H(e,l,a,u){Object.defineProperty(e,l,{value:a,enumerable:!!u,writable:!0,configurable:!0})}var z=new RegExp("[^"+q.source+".$_\\d]");function J(e){if(!z.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var G,W="__proto__"in{},X="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Q=X&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),le=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===K),ae=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(X)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ue)}catch(et){}var te=function(){return void 0===G&&(G=!X&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},ne=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ve(e){return"function"===typeof e&&/native code/.test(e.toString())}var re,be="undefined"!==typeof Symbol&&ve(Symbol)&&"undefined"!==typeof Reflect&&ve(Reflect.ownKeys);re="undefined"!==typeof Set&&ve(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var oe=C,ie=0,se=function(){this.id=ie++,this.subs=[]};function ce(e){se.SharedObject.targetStack.push(e),se.SharedObject.target=e}function fe(){se.SharedObject.targetStack.pop(),se.SharedObject.target=se.SharedObject.targetStack[se.SharedObject.targetStack.length-1]}se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){y(this.subs,e)},se.prototype.depend=function(){se.SharedObject.target&&se.SharedObject.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},se.SharedObject.target=null,se.SharedObject.targetStack=[];var pe=function(e,l,a,u,t,n,v,r){this.tag=e,this.data=l,this.children=a,this.text=u,this.elm=t,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=v,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=r,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,he);var de=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ge(e){return new pe(void 0,void 0,void 0,String(e))}function ye(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var _e=Array.prototype,me=Object.create(_e),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach(function(e){var l=_e[e];H(me,e,function(){var a=[],u=arguments.length;while(u--)a[u]=arguments[u];var t,n=l.apply(this,a),v=this.__ob__;switch(e){case"push":case"unshift":t=a;break;case"splice":t=a.slice(2);break}return t&&v.observeArray(t),v.dep.notify(),n})});var Oe=Object.getOwnPropertyNames(me),ke=!0;function Se(e){ke=e}var $e=function(e){this.value=e,this.dep=new se,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(W?e.push!==e.__proto__.push?Ae(e,me,Oe):xe(e,me):Ae(e,me,Oe),this.observeArray(e)):this.walk(e)};function xe(e,l){e.__proto__=l}function Ae(e,l,a){for(var u=0,t=a.length;u<t;u++){var n=a[u];H(e,n,l[n])}}function je(e,l){var a;if(b(e)&&!(e instanceof pe))return m(e,"__ob__")&&e.__ob__ instanceof $e?a=e.__ob__:ke&&!te()&&(Array.isArray(e)||i(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new $e(e)),l&&a&&a.vmCount++,a}function De(e,l,a,u,t){var n=new se,v=Object.getOwnPropertyDescriptor(e,l);if(!v||!1!==v.configurable){var r=v&&v.get,b=v&&v.set;r&&!b||2!==arguments.length||(a=e[l]);var o=!t&&je(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=r?r.call(e):a;return se.SharedObject.target&&(n.depend(),o&&(o.dep.depend(),Array.isArray(l)&&Te(l))),l},set:function(l){var u=r?r.call(e):a;l===u||l!==l&&u!==u||r&&!b||(b?b.call(e,l):a=l,o=!t&&je(l),n.notify())}})}}function Ee(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var u=e.__ob__;return e._isVue||u&&u.vmCount?a:u?(De(u.value,l,a),u.dep.notify(),a):(e[l]=a,a)}function Pe(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||m(e,l)&&(delete e[l],a&&a.dep.notify())}}function Te(e){for(var l=void 0,a=0,u=e.length;a<u;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Te(l)}$e.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)De(e,l[a])},$e.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)je(e[l])};var Ce=B.optionMergeStrategies;function Ie(e,l){if(!l)return e;for(var a,u,t,n=be?Reflect.ownKeys(l):Object.keys(l),v=0;v<n.length;v++)a=n[v],"__ob__"!==a&&(u=e[a],t=l[a],m(e,a)?u!==t&&i(u)&&i(t)&&Ie(u,t):Ee(e,a,t));return e}function Ne(e,l,a){return a?function(){var u="function"===typeof l?l.call(a,a):l,t="function"===typeof e?e.call(a,a):e;return u?Ie(u,t):t}:l?e?function(){return Ie("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Re(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Ue(a):a}function Ue(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Me(e,l,a,u){var t=Object.create(e||null);return l?P(t,l):t}Ce.data=function(e,l,a){return a?Ne(e,l,a):l&&"function"!==typeof l?e:Ne(e,l)},F.forEach(function(e){Ce[e]=Re}),L.forEach(function(e){Ce[e+"s"]=Me}),Ce.watch=function(e,l,a,u){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var t={};for(var n in P(t,e),l){var v=t[n],r=l[n];v&&!Array.isArray(v)&&(v=[v]),t[n]=v?v.concat(r):Array.isArray(r)?r:[r]}return t},Ce.props=Ce.methods=Ce.inject=Ce.computed=function(e,l,a,u){if(!e)return l;var t=Object.create(null);return P(t,e),l&&P(t,l),t},Ce.provide=Ne;var Le=function(e,l){return void 0===l?e:l};function Fe(e,l){var a=e.props;if(a){var u,t,n,v={};if(Array.isArray(a)){u=a.length;while(u--)t=a[u],"string"===typeof t&&(n=k(t),v[n]={type:null})}else if(i(a))for(var r in a)t=a[r],n=k(r),v[n]=i(t)?t:{type:t};else 0;e.props=v}}function Be(e,l){var a=e.inject;if(a){var u=e.inject={};if(Array.isArray(a))for(var t=0;t<a.length;t++)u[a[t]]={from:a[t]};else if(i(a))for(var n in a){var v=a[n];u[n]=i(v)?P({from:n},v):{from:v}}else 0}}function qe(e){var l=e.directives;if(l)for(var a in l){var u=l[a];"function"===typeof u&&(l[a]={bind:u,update:u})}}function Ve(e,l,a){if("function"===typeof l&&(l=l.options),Fe(l,a),Be(l,a),qe(l),!l._base&&(l.extends&&(e=Ve(e,l.extends,a)),l.mixins))for(var u=0,t=l.mixins.length;u<t;u++)e=Ve(e,l.mixins[u],a);var n,v={};for(n in e)r(n);for(n in l)m(e,n)||r(n);function r(u){var t=Ce[u]||Le;v[u]=t(e[u],l[u],a,u)}return v}function He(e,l,a,u){if("string"===typeof a){var t=e[l];if(m(t,a))return t[a];var n=k(a);if(m(t,n))return t[n];var v=S(n);if(m(t,v))return t[v];var r=t[a]||t[n]||t[v];return r}}function ze(e,l,a,u){var t=l[e],n=!m(a,e),v=a[e],r=Xe(Boolean,t.type);if(r>-1)if(n&&!m(t,"default"))v=!1;else if(""===v||v===x(e)){var b=Xe(String,t.type);(b<0||r<b)&&(v=!0)}if(void 0===v){v=Je(u,t,e);var o=ke;Se(!0),je(v),Se(o)}return v}function Je(e,l,a){if(m(l,"default")){var u=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof u&&"Function"!==Ge(l.type)?u.call(e):u}}function Ge(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function We(e,l){return Ge(e)===Ge(l)}function Xe(e,l){if(!Array.isArray(l))return We(l,e)?0:-1;for(var a=0,u=l.length;a<u;a++)if(We(l[a],e))return a;return-1}function Ye(e,l,a){ce();try{if(l){var u=l;while(u=u.$parent){var t=u.$options.errorCaptured;if(t)for(var n=0;n<t.length;n++)try{var v=!1===t[n].call(u,e,l,a);if(v)return}catch(et){Qe(et,u,"errorCaptured hook")}}}Qe(e,l,a)}finally{fe()}}function Ke(e,l,a,u,t){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&f(n)&&!n._handled&&(n.catch(function(e){return Ye(e,u,t+" (Promise/async)")}),n._handled=!0)}catch(et){Ye(et,u,t)}return n}function Qe(e,l,a){if(B.errorHandler)try{return B.errorHandler.call(null,e,l,a)}catch(et){et!==e&&Ze(et,null,"config.errorHandler")}Ze(e,l,a)}function Ze(e,l,a){if(!X&&!Y||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function ul(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&ve(Promise)){var tl=Promise.resolve();el=function(){tl.then(ul),le&&setTimeout(C)}}else if(Z||"undefined"===typeof MutationObserver||!ve(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&ve(setImmediate)?function(){setImmediate(ul)}:function(){setTimeout(ul,0)};else{var nl=1,vl=new MutationObserver(ul),rl=document.createTextNode(String(nl));vl.observe(rl,{characterData:!0}),el=function(){nl=(nl+1)%2,rl.data=String(nl)}}function bl(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(et){Ye(et,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var ol=new re;function il(e){sl(e,ol),ol.clear()}function sl(e,l){var a,u,t=Array.isArray(e);if(!(!t&&!b(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(t){a=e.length;while(a--)sl(e[a],l)}else{u=Object.keys(e),a=u.length;while(a--)sl(e[u[a]],l)}}}var cl=w(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var u="!"===e.charAt(0);return e=u?e.slice(1):e,{name:e,once:a,capture:u,passive:l}});function fl(e,l){function a(){var e=arguments,u=a.fns;if(!Array.isArray(u))return Ke(u,null,arguments,l,"v-on handler");for(var t=u.slice(),n=0;n<t.length;n++)Ke(t[n],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,t,v,r){var b,o,i,s;for(b in e)o=e[b],i=l[b],s=cl(b),u(o)||(u(i)?(u(o.fns)&&(o=e[b]=fl(o,r)),n(s.once)&&(o=e[b]=v(s.name,o,s.capture)),a(s.name,o,s.capture,s.passive,s.params)):o!==i&&(i.fns=o,e[b]=i));for(b in l)u(e[b])&&(s=cl(b),t(s.name,l[b],s.capture))}function hl(e,l,a){var n=l.options.props;if(!u(n)){var v={},r=e.attrs,b=e.props;if(t(r)||t(b))for(var o in n){var i=x(o);dl(v,b,o,i,!0)||dl(v,r,o,i,!1)}return v}}function dl(e,l,a,u,n){if(t(l)){if(m(l,a))return e[a]=l[a],n||delete l[a],!0;if(m(l,u))return e[a]=l[u],n||delete l[u],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function yl(e){return r(e)?[ge(e)]:Array.isArray(e)?ml(e):void 0}function _l(e){return t(e)&&t(e.text)&&v(e.isComment)}function ml(e,l){var a,v,b,o,i=[];for(a=0;a<e.length;a++)v=e[a],u(v)||"boolean"===typeof v||(b=i.length-1,o=i[b],Array.isArray(v)?v.length>0&&(v=ml(v,(l||"")+"_"+a),_l(v[0])&&_l(o)&&(i[b]=ge(o.text+v[0].text),v.shift()),i.push.apply(i,v)):r(v)?_l(o)?i[b]=ge(o.text+v):""!==v&&i.push(ge(v)):_l(v)&&_l(o)?i[b]=ge(o.text+v.text):(n(e._isVList)&&t(v.tag)&&u(v.key)&&t(l)&&(v.key="__vlist"+l+"_"+a+"__"),i.push(v)));return i}function wl(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function Ol(e){var l=kl(e.$options.inject,e);l&&(Se(!1),Object.keys(l).forEach(function(a){De(e,a,l[a])}),Se(!0))}function kl(e,l){if(e){for(var a=Object.create(null),u=be?Reflect.ownKeys(e):Object.keys(e),t=0;t<u.length;t++){var n=u[t];if("__ob__"!==n){var v=e[n].from,r=l;while(r){if(r._provided&&m(r._provided,v)){a[n]=r._provided[v];break}r=r.$parent}if(!r)if("default"in e[n]){var b=e[n].default;a[n]="function"===typeof b?b.call(l):b}else 0}}return a}}function Sl(e,l){if(!e||!e.length)return{};for(var a={},u=0,t=e.length;u<t;u++){var n=e[u],v=n.data;if(v&&v.attrs&&v.attrs.slot&&delete v.attrs.slot,n.context!==l&&n.fnContext!==l||!v||null==v.slot)n.asyncMeta&&n.asyncMeta.data&&"page"===n.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(n):(a.default||(a.default=[])).push(n);else{var r=v.slot,b=a[r]||(a[r]=[]);"template"===n.tag?b.push.apply(b,n.children||[]):b.push(n)}}for(var o in a)a[o].every($l)&&delete a[o];return a}function $l(e){return e.isComment&&!e.asyncFactory||" "===e.text}function xl(e,l,u){var t,n=Object.keys(l).length>0,v=e?!!e.$stable:!n,r=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(v&&u&&u!==a&&r===u.$key&&!n&&!u.$hasNormal)return u;for(var b in t={},e)e[b]&&"$"!==b[0]&&(t[b]=Al(l,b,e[b]))}else t={};for(var o in l)o in t||(t[o]=jl(l,o));return e&&Object.isExtensible(e)&&(e._normalized=t),H(t,"$stable",v),H(t,"$key",r),H(t,"$hasNormal",n),t}function Al(e,l,a){var u=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:yl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:u,enumerable:!0,configurable:!0}),u}function jl(e,l){return function(){return e[l]}}function Dl(e,l){var a,u,n,v,r;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),u=0,n=e.length;u<n;u++)a[u]=l(e[u],u);else if("number"===typeof e)for(a=new Array(e),u=0;u<e;u++)a[u]=l(u+1,u);else if(b(e))if(be&&e[Symbol.iterator]){a=[];var o=e[Symbol.iterator](),i=o.next();while(!i.done)a.push(l(i.value,a.length)),i=o.next()}else for(v=Object.keys(e),a=new Array(v.length),u=0,n=v.length;u<n;u++)r=v[u],a[u]=l(e[r],r,u);return t(a)||(a=[]),a._isVList=!0,a}function El(e,l,a,u){var t,n=this.$scopedSlots[e];n?(a=a||{},u&&(a=P(P({},u),a)),t=n(a)||l):t=this.$slots[e]||l;var v=a&&a.slot;return v?this.$createElement("template",{slot:v},t):t}function Pl(e){return He(this.$options,"filters",e,!0)||N}function Tl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Cl(e,l,a,u,t){var n=B.keyCodes[l]||a;return t&&u&&!B.keyCodes[l]?Tl(t,u):n?Tl(n,e):u?x(u)!==l:void 0}function Il(e,l,a,u,t){if(a)if(b(a)){var n;Array.isArray(a)&&(a=T(a));var v=function(v){if("class"===v||"style"===v||g(v))n=e;else{var r=e.attrs&&e.attrs.type;n=u||B.mustUseProp(l,r,v)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var b=k(v),o=x(v);if(!(b in n)&&!(o in n)&&(n[v]=a[v],t)){var i=e.on||(e.on={});i["update:"+v]=function(e){a[v]=e}}};for(var r in a)v(r)}else;return e}function Nl(e,l){var a=this._staticTrees||(this._staticTrees=[]),u=a[e];return u&&!l?u:(u=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Ul(u,"__static__"+e,!1),u)}function Rl(e,l,a){return Ul(e,"__once__"+l+(a?"_"+a:""),!0),e}function Ul(e,l,a){if(Array.isArray(e))for(var u=0;u<e.length;u++)e[u]&&"string"!==typeof e[u]&&Ml(e[u],l+"_"+u,a);else Ml(e,l,a)}function Ml(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Ll(e,l){if(l)if(i(l)){var a=e.on=e.on?P({},e.on):{};for(var u in l){var t=a[u],n=l[u];a[u]=t?[].concat(t,n):n}}else;return e}function Fl(e,l,a,u){l=l||{$stable:!a};for(var t=0;t<e.length;t++){var n=e[t];Array.isArray(n)?Fl(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return u&&(l.$key=u),l}function Bl(e,l){for(var a=0;a<l.length;a+=2){var u=l[a];"string"===typeof u&&u&&(e[l[a]]=l[a+1])}return e}function ql(e,l){return"string"===typeof e?l+e:e}function Vl(e){e._o=Rl,e._n=h,e._s=p,e._l=Dl,e._t=El,e._q=R,e._i=U,e._m=Nl,e._f=Pl,e._k=Cl,e._b=Il,e._v=ge,e._e=de,e._u=Fl,e._g=Ll,e._d=Bl,e._p=ql}function Hl(e,l,u,t,v){var r,b=this,o=v.options;m(t,"_uid")?(r=Object.create(t),r._original=t):(r=t,t=t._original);var i=n(o._compiled),s=!i;this.data=e,this.props=l,this.children=u,this.parent=t,this.listeners=e.on||a,this.injections=kl(o.inject,t),this.slots=function(){return b.$slots||xl(e.scopedSlots,b.$slots=Sl(u,t)),b.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xl(e.scopedSlots,this.slots())}}),i&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=xl(e.scopedSlots,this.$slots)),o._scopeId?this._c=function(e,l,a,u){var n=ua(r,e,l,a,u,s);return n&&!Array.isArray(n)&&(n.fnScopeId=o._scopeId,n.fnContext=t),n}:this._c=function(e,l,a,u){return ua(r,e,l,a,u,s)}}function zl(e,l,u,n,v){var r=e.options,b={},o=r.props;if(t(o))for(var i in o)b[i]=ze(i,o,l||a);else t(u.attrs)&&Gl(b,u.attrs),t(u.props)&&Gl(b,u.props);var s=new Hl(u,b,v,n,e),c=r.render.call(null,s._c,s);if(c instanceof pe)return Jl(c,u,s.parent,r,s);if(Array.isArray(c)){for(var f=yl(c)||[],p=new Array(f.length),h=0;h<f.length;h++)p[h]=Jl(f[h],u,s.parent,r,s);return p}}function Jl(e,l,a,u,t){var n=ye(e);return n.fnContext=a,n.fnOptions=u,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function Gl(e,l){for(var a in l)e[k(a)]=l[a]}Vl(Hl.prototype);var Wl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Wl.prepatch(a,a)}else{var u=e.componentInstance=Kl(e,Oa);u.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,u=l.componentInstance=e.componentInstance;xa(u,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ea(a,"mounted")),e.data.keepAlive&&(l._isMounted?qa(a):ja(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Da(l,!0):l.$destroy())}},Xl=Object.keys(Wl);function Yl(e,l,a,v,r){if(!u(e)){var o=a.$options._base;if(b(e)&&(e=o.extend(e)),"function"===typeof e){var i;if(u(e.cid)&&(i=e,e=fa(i,o),void 0===e))return ca(i,l,a,v,r);l=l||{},su(e),t(l.model)&&ea(e.options,l);var s=hl(l,e,r);if(n(e.options.functional))return zl(e,s,l,a,v);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Ql(l);var p=e.options.name||r,h=new pe("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:r,children:v},i);return h}}}function Kl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},u=e.data.inlineTemplate;return t(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new e.componentOptions.Ctor(a)}function Ql(e){for(var l=e.hook||(e.hook={}),a=0;a<Xl.length;a++){var u=Xl[a],t=l[u],n=Wl[u];t===n||t&&t._merged||(l[u]=t?Zl(n,t):n)}}function Zl(e,l){var a=function(a,u){e(a,u),l(a,u)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",u=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),v=n[u],r=l.model.callback;t(v)?(Array.isArray(v)?-1===v.indexOf(r):v!==r)&&(n[u]=[r].concat(v)):n[u]=r}var la=1,aa=2;function ua(e,l,a,u,t,v){return(Array.isArray(a)||r(a))&&(t=u,u=a,a=void 0),n(v)&&(t=aa),ta(e,l,a,u,t)}function ta(e,l,a,u,n){if(t(a)&&t(a.__ob__))return de();if(t(a)&&t(a.is)&&(l=a.is),!l)return de();var v,r,b;(Array.isArray(u)&&"function"===typeof u[0]&&(a=a||{},a.scopedSlots={default:u[0]},u.length=0),n===aa?u=yl(u):n===la&&(u=gl(u)),"string"===typeof l)?(r=e.$vnode&&e.$vnode.ns||B.getTagNamespace(l),v=B.isReservedTag(l)?new pe(B.parsePlatformTagName(l),a,u,void 0,void 0,e):a&&a.pre||!t(b=He(e.$options,"components",l))?new pe(l,a,u,void 0,void 0,e):Yl(b,a,e,u,l)):v=Yl(l,a,e,u);return Array.isArray(v)?v:t(v)?(t(r)&&na(v,r),t(a)&&va(a),v):de()}function na(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),t(e.children))for(var v=0,r=e.children.length;v<r;v++){var b=e.children[v];t(b.tag)&&(u(b.ns)||n(a)&&"svg"!==b.tag)&&na(b,l,a)}}function va(e){b(e.style)&&il(e.style),b(e.class)&&il(e.class)}function ra(e){e._vnode=null,e._staticTrees=null;var l=e.$options,u=e.$vnode=l._parentVnode,t=u&&u.context;e.$slots=Sl(l._renderChildren,t),e.$scopedSlots=a,e._c=function(l,a,u,t){return ua(e,l,a,u,t,!1)},e.$createElement=function(l,a,u,t){return ua(e,l,a,u,t,!0)};var n=u&&u.data;De(e,"$attrs",n&&n.attrs||a,null,!0),De(e,"$listeners",l._parentListeners||a,null,!0)}var ba,oa=null;function ia(e){Vl(e.prototype),e.prototype.$nextTick=function(e){return bl(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,u=a.render,t=a._parentVnode;t&&(l.$scopedSlots=xl(t.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=t;try{oa=l,e=u.call(l._renderProxy,l.$createElement)}catch(et){Ye(et,l,"render"),e=l._vnode}finally{oa=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=de()),e.parent=t,e}}function sa(e,l){return(e.__esModule||be&&"Module"===e[Symbol.toStringTag])&&(e=e.default),b(e)?l.extend(e):e}function ca(e,l,a,u,t){var n=de();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:u,tag:t},n}function fa(e,l){if(n(e.error)&&t(e.errorComp))return e.errorComp;if(t(e.resolved))return e.resolved;var a=oa;if(a&&t(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&t(e.loadingComp))return e.loadingComp;if(a&&!t(e.owners)){var v=e.owners=[a],r=!0,o=null,i=null;a.$on("hook:destroyed",function(){return y(v,a)});var s=function(e){for(var l=0,a=v.length;l<a;l++)v[l].$forceUpdate();e&&(v.length=0,null!==o&&(clearTimeout(o),o=null),null!==i&&(clearTimeout(i),i=null))},c=M(function(a){e.resolved=sa(a,l),r?v.length=0:s(!0)}),p=M(function(l){t(e.errorComp)&&(e.error=!0,s(!0))}),h=e(c,p);return b(h)&&(f(h)?u(e.resolved)&&h.then(c,p):f(h.component)&&(h.component.then(c,p),t(h.error)&&(e.errorComp=sa(h.error,l)),t(h.loading)&&(e.loadingComp=sa(h.loading,l),0===h.delay?e.loading=!0:o=setTimeout(function(){o=null,u(e.resolved)&&u(e.error)&&(e.loading=!0,s(!1))},h.delay||200)),t(h.timeout)&&(i=setTimeout(function(){i=null,u(e.resolved)&&p(null)},h.timeout)))),r=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function ha(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(t(a)&&(t(a.componentOptions)||pa(a)))return a}}function da(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&ma(e,l)}function ga(e,l){ba.$on(e,l)}function ya(e,l){ba.$off(e,l)}function _a(e,l){var a=ba;return function u(){var t=l.apply(null,arguments);null!==t&&a.$off(e,u)}}function ma(e,l,a){ba=e,pl(l,a||{},ga,ya,_a,e),ba=void 0}function wa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var u=this;if(Array.isArray(e))for(var t=0,n=e.length;t<n;t++)u.$on(e[t],a);else(u._events[e]||(u._events[e]=[])).push(a),l.test(e)&&(u._hasHookEvent=!0);return u},e.prototype.$once=function(e,l){var a=this;function u(){a.$off(e,u),l.apply(a,arguments)}return u.fn=l,a.$on(e,u),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var u=0,t=e.length;u<t;u++)a.$off(e[u],l);return a}var n,v=a._events[e];if(!v)return a;if(!l)return a._events[e]=null,a;var r=v.length;while(r--)if(n=v[r],n===l||n.fn===l){v.splice(r,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?E(a):a;for(var u=E(arguments,1),t='event handler for "'+e+'"',n=0,v=a.length;n<v;n++)Ke(a[n],l,u,l,t)}return l}}var Oa=null;function ka(e){var l=Oa;return Oa=e,function(){Oa=l}}function Sa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function $a(e){e.prototype._update=function(e,l){var a=this,u=a.$el,t=a._vnode,n=ka(a);a._vnode=e,a.$el=t?a.__patch__(t,e):a.__patch__(a.$el,e,l,!1),n(),u&&(u.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ea(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||y(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ea(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function xa(e,l,u,t,n){var v=t.data.scopedSlots,r=e.$scopedSlots,b=!!(v&&!v.$stable||r!==a&&!r.$stable||v&&e.$scopedSlots.$key!==v.$key),o=!!(n||e.$options._renderChildren||b);if(e.$options._parentVnode=t,e.$vnode=t,e._vnode&&(e._vnode.parent=t),e.$options._renderChildren=n,e.$attrs=t.data.attrs||a,e.$listeners=u||a,l&&e.$options.props){Se(!1);for(var i=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=e.$options.props;i[f]=ze(f,p,l,e)}Se(!0),e.$options.propsData=l}u=u||a;var h=e.$options._parentListeners;e.$options._parentListeners=u,ma(e,u,h),o&&(e.$slots=Sl(n,t.context),e.$forceUpdate())}function Aa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function ja(e,l){if(l){if(e._directInactive=!1,Aa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)ja(e.$children[a]);Ea(e,"activated")}}function Da(e,l){if((!l||(e._directInactive=!0,!Aa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Da(e.$children[a]);Ea(e,"deactivated")}}function Ea(e,l){ce();var a=e.$options[l],u=l+" hook";if(a)for(var t=0,n=a.length;t<n;t++)Ke(a[t],e,null,e,u);e._hasHookEvent&&e.$emit("hook:"+l),fe()}var Pa=[],Ta=[],Ca={},Ia=!1,Na=!1,Ra=0;function Ua(){Ra=Pa.length=Ta.length=0,Ca={},Ia=Na=!1}var Ma=Date.now;if(X&&!Z){var La=window.performance;La&&"function"===typeof La.now&&Ma()>document.createEvent("Event").timeStamp&&(Ma=function(){return La.now()})}function Fa(){var e,l;for(Ma(),Na=!0,Pa.sort(function(e,l){return e.id-l.id}),Ra=0;Ra<Pa.length;Ra++)e=Pa[Ra],e.before&&e.before(),l=e.id,Ca[l]=null,e.run();var a=Ta.slice(),u=Pa.slice();Ua(),Va(a),Ba(u),ne&&B.devtools&&ne.emit("flush")}function Ba(e){var l=e.length;while(l--){var a=e[l],u=a.vm;u._watcher===a&&u._isMounted&&!u._isDestroyed&&Ea(u,"updated")}}function qa(e){e._inactive=!1,Ta.push(e)}function Va(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,ja(e[l],!0)}function Ha(e){var l=e.id;if(null==Ca[l]){if(Ca[l]=!0,Na){var a=Pa.length-1;while(a>Ra&&Pa[a].id>e.id)a--;Pa.splice(a+1,0,e)}else Pa.push(e);Ia||(Ia=!0,bl(Fa))}}var za=0,Ja=function(e,l,a,u,t){this.vm=e,t&&(e._watcher=this),e._watchers.push(this),u?(this.deep=!!u.deep,this.user=!!u.user,this.lazy=!!u.lazy,this.sync=!!u.sync,this.before=u.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++za,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new re,this.newDepIds=new re,this.expression="","function"===typeof l?this.getter=l:(this.getter=J(l),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Ja.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(et){if(!this.user)throw et;Ye(et,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&il(e),fe(),this.cleanupDeps()}return e},Ja.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Ja.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ja.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ha(this)},Ja.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||b(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(et){Ye(et,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Ja.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ja.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Ja.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ga={enumerable:!0,configurable:!0,get:C,set:C};function Wa(e,l,a){Ga.get=function(){return this[l][a]},Ga.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ga)}function Xa(e){e._watchers=[];var l=e.$options;l.props&&Ya(e,l.props),l.methods&&tu(e,l.methods),l.data?Ka(e):je(e._data={},!0),l.computed&&eu(e,l.computed),l.watch&&l.watch!==ae&&nu(e,l.watch)}function Ya(e,l){var a=e.$options.propsData||{},u=e._props={},t=e.$options._propKeys=[],n=!e.$parent;n||Se(!1);var v=function(n){t.push(n);var v=ze(n,l,a,e);De(u,n,v),n in e||Wa(e,"_props",n)};for(var r in l)v(r);Se(!0)}function Ka(e){var l=e.$options.data;l=e._data="function"===typeof l?Qa(l,e):l||{},i(l)||(l={});var a=Object.keys(l),u=e.$options.props,t=(e.$options.methods,a.length);while(t--){var n=a[t];0,u&&m(u,n)||V(n)||Wa(e,"_data",n)}je(l,!0)}function Qa(e,l){ce();try{return e.call(l,l)}catch(et){return Ye(et,l,"data()"),{}}finally{fe()}}var Za={lazy:!0};function eu(e,l){var a=e._computedWatchers=Object.create(null),u=te();for(var t in l){var n=l[t],v="function"===typeof n?n:n.get;0,u||(a[t]=new Ja(e,v||C,C,Za)),t in e||lu(e,t,n)}}function lu(e,l,a){var u=!te();"function"===typeof a?(Ga.get=u?au(l):uu(a),Ga.set=C):(Ga.get=a.get?u&&!1!==a.cache?au(l):uu(a.get):C,Ga.set=a.set||C),Object.defineProperty(e,l,Ga)}function au(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.SharedObject.target&&l.depend(),l.value}}function uu(e){return function(){return e.call(this,this)}}function tu(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?C:D(l[a],e)}function nu(e,l){for(var a in l){var u=l[a];if(Array.isArray(u))for(var t=0;t<u.length;t++)vu(e,a,u[t]);else vu(e,a,u)}}function vu(e,l,a,u){return i(a)&&(u=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,u)}function ru(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ee,e.prototype.$delete=Pe,e.prototype.$watch=function(e,l,a){var u=this;if(i(l))return vu(u,e,l,a);a=a||{},a.user=!0;var t=new Ja(u,e,l,a);if(a.immediate)try{l.call(u,t.value)}catch(n){Ye(n,u,'callback for immediate watcher "'+t.expression+'"')}return function(){t.teardown()}}}var bu=0;function ou(e){e.prototype._init=function(e){var l=this;l._uid=bu++,l._isVue=!0,e&&e._isComponent?iu(l,e):l.$options=Ve(su(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Sa(l),da(l),ra(l),Ea(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&Ol(l),Xa(l),"mp-toutiao"!==l.mpHost&&wl(l),"mp-toutiao"!==l.mpHost&&Ea(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function iu(e,l){var a=e.$options=Object.create(e.constructor.options),u=l._parentVnode;a.parent=l.parent,a._parentVnode=u;var t=u.componentOptions;a.propsData=t.propsData,a._parentListeners=t.listeners,a._renderChildren=t.children,a._componentTag=t.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function su(e){var l=e.options;if(e.super){var a=su(e.super),u=e.superOptions;if(a!==u){e.superOptions=a;var t=cu(e);t&&P(e.extendOptions,t),l=e.options=Ve(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function cu(e){var l,a=e.options,u=e.sealedOptions;for(var t in a)a[t]!==u[t]&&(l||(l={}),l[t]=a[t]);return l}function fu(e){this._init(e)}function pu(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function hu(e){e.mixin=function(e){return this.options=Ve(this.options,e),this}}function du(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,u=a.cid,t=e._Ctor||(e._Ctor={});if(t[u])return t[u];var n=e.name||a.options.name;var v=function(e){this._init(e)};return v.prototype=Object.create(a.prototype),v.prototype.constructor=v,v.cid=l++,v.options=Ve(a.options,e),v["super"]=a,v.options.props&&gu(v),v.options.computed&&yu(v),v.extend=a.extend,v.mixin=a.mixin,v.use=a.use,L.forEach(function(e){v[e]=a[e]}),n&&(v.options.components[n]=v),v.superOptions=a.options,v.extendOptions=e,v.sealedOptions=P({},v.options),t[u]=v,v}}function gu(e){var l=e.options.props;for(var a in l)Wa(e.prototype,"_props",a)}function yu(e){var l=e.options.computed;for(var a in l)lu(e.prototype,a,l[a])}function _u(e){L.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&i(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function mu(e){return e&&(e.Ctor.options.name||e.tag)}function wu(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function Ou(e,l){var a=e.cache,u=e.keys,t=e._vnode;for(var n in a){var v=a[n];if(v){var r=mu(v.componentOptions);r&&!l(r)&&ku(a,n,u,t)}}}function ku(e,l,a,u){var t=e[l];!t||u&&t.tag===u.tag||t.componentInstance.$destroy(),e[l]=null,y(a,l)}ou(fu),ru(fu),wa(fu),$a(fu),ia(fu);var Su=[String,RegExp,Array],$u={name:"keep-alive",abstract:!0,props:{include:Su,exclude:Su,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ku(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){Ou(e,function(e){return wu(l,e)})}),this.$watch("exclude",function(l){Ou(e,function(e){return!wu(l,e)})})},render:function(){var e=this.$slots.default,l=ha(e),a=l&&l.componentOptions;if(a){var u=mu(a),t=this,n=t.include,v=t.exclude;if(n&&(!u||!wu(n,u))||v&&u&&wu(v,u))return l;var r=this,b=r.cache,o=r.keys,i=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;b[i]?(l.componentInstance=b[i].componentInstance,y(o,i),o.push(i)):(b[i]=l,o.push(i),this.max&&o.length>parseInt(this.max)&&ku(b,o[0],o,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},xu={KeepAlive:$u};function Au(e){var l={get:function(){return B}};Object.defineProperty(e,"config",l),e.util={warn:oe,extend:P,mergeOptions:Ve,defineReactive:De},e.set=Ee,e.delete=Pe,e.nextTick=bl,e.observable=function(e){return je(e),e},e.options=Object.create(null),L.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,P(e.options.components,xu),pu(e),hu(e),du(e),_u(e)}Au(fu),Object.defineProperty(fu.prototype,"$isServer",{get:te}),Object.defineProperty(fu.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(fu,"FunctionalRenderContext",{value:Hl}),fu.version="2.6.10";var ju="[object Array]",Du="[object Object]";function Eu(e,l){var a={};return Pu(e,l),Tu(e,l,"",a),a}function Pu(e,l){if(e!==l){var a=Iu(e),u=Iu(l);if(a==Du&&u==Du){if(Object.keys(e).length>=Object.keys(l).length)for(var t in l){var n=e[t];void 0===n?e[t]=null:Pu(n,l[t])}}else a==ju&&u==ju&&e.length>=l.length&&l.forEach(function(l,a){Pu(e[a],l)})}}function Tu(e,l,a,u){if(e!==l){var t=Iu(e),n=Iu(l);if(t==Du)if(n!=Du||Object.keys(e).length<Object.keys(l).length)Cu(u,a,e);else{var v=function(t){var n=e[t],v=l[t],r=Iu(n),b=Iu(v);if(r!=ju&&r!=Du)n!=l[t]&&Cu(u,(""==a?"":a+".")+t,n);else if(r==ju)b!=ju?Cu(u,(""==a?"":a+".")+t,n):n.length<v.length?Cu(u,(""==a?"":a+".")+t,n):n.forEach(function(e,l){Tu(e,v[l],(""==a?"":a+".")+t+"["+l+"]",u)});else if(r==Du)if(b!=Du||Object.keys(n).length<Object.keys(v).length)Cu(u,(""==a?"":a+".")+t,n);else for(var o in n)Tu(n[o],v[o],(""==a?"":a+".")+t+"."+o,u)};for(var r in e)v(r)}else t==ju?n!=ju?Cu(u,a,e):e.length<l.length?Cu(u,a,e):e.forEach(function(e,t){Tu(e,l[t],a+"["+t+"]",u)}):Cu(u,a,e)}}function Cu(e,l,a){e[l]=a}function Iu(e){return Object.prototype.toString.call(e)}function Nu(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var u=0;u<a.length;u++)a[u]()}}function Ru(e){return Pa.find(function(l){return e._watcher===l})}function Uu(e,l){if(!e.__next_tick_pending&&!Ru(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return bl(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var u=e.$scope;console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+e._uid+"]:nextMPTick")}var t;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(et){Ye(et,e,"nextTick")}else t&&t(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){t=e})}function Mu(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Lu=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var u=this.$scope,t=Object.create(null);try{t=Mu(this)}catch(r){console.error(r)}t.__webviewId__=u.data.__webviewId__;var n=Object.create(null);Object.keys(t).forEach(function(e){n[e]=u.data[e]});var v=Eu(t,n);Object.keys(v).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+this._uid+"]差量更新",JSON.stringify(v)),this.__next_tick_pending=!0,u.setData(v,function(){a.__next_tick_pending=!1,Nu(a)})):Nu(this)}};function Fu(){}function Bu(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Fu),e.$options.render||(e.$options.render=Fu),"mp-toutiao"!==e.mpHost&&Ea(e,"beforeMount");var u=function(){e._update(e._render(),a)};return new Ja(e,u,C,{before:function(){e._isMounted&&!e._isDestroyed&&Ea(e,"beforeUpdate")}},!0),a=!1,e}function qu(e,l){return t(e)||t(l)?Vu(e,Hu(l)):""}function Vu(e,l){return e?l?e+" "+l:e:l||""}function Hu(e){return Array.isArray(e)?zu(e):b(e)?Ju(e):"string"===typeof e?e:""}function zu(e){for(var l,a="",u=0,n=e.length;u<n;u++)t(l=Hu(e[u]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Ju(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Gu=w(function(e){var l={},a=/;(?![^(]*\))/g,u=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(u);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Wu(e){return Array.isArray(e)?T(e):"string"===typeof e?Gu(e):e}var Xu=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yu(e,l){var a=l.split("."),u=a[0];return 0===u.indexOf("__$n")&&(u=parseInt(u.replace("__$n",""))),1===a.length?e[u]:Yu(e[u],a.slice(1).join("."))}function Ku(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:E(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Uu(this,e)},Xu.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=wl,e.prototype.__init_injections=Ol,e.prototype.__call_hook=function(e,l){var a=this;ce();var u,t=a.$options[e],n=e+" hook";if(t)for(var v=0,r=t.length;v<r;v++)u=Ke(t[v],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e),fe(),u},e.prototype.__set_model=function(e,l,a,u){Array.isArray(u)&&(-1!==u.indexOf("trim")&&(a=a.trim()),-1!==u.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return i(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Yu(l||this,e)},e.prototype.__get_class=function(e,l){return qu(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Wu(e),u=l?P(l,a):a;return Object.keys(u).map(function(e){return x(e)+":"+u[e]}).join(";")},e.prototype.__map=function(e,l){var a,u,t,n,v;if(Array.isArray(e)){for(a=new Array(e.length),u=0,t=e.length;u<t;u++)a[u]=l(e[u],u);return a}if(b(e)){for(n=Object.keys(e),a=Object.create(null),u=0,t=n.length;u<t;u++)v=n[u],a[v]=l(e[v],v,u);return a}return[]}}var Qu=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Zu(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Qu.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,u=a.created;Qu.forEach(function(e){a[e]=u}),e.prototype.__lifecycle_hooks__=Qu}fu.prototype.__patch__=Lu,fu.prototype.$mount=function(e,l){return Bu(this,e,l)},Zu(fu),Ku(fu),l["default"]=fu}.call(this,a("c8ba"))},"67dc":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],t=u;l.default=t},"69dc":function(e,l,a){"use strict";var u=t(a("bd7b"));function t(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};u.get||u.set?Object.defineProperty(l,a,u):l[a]=e[a]}return l.default=e,l}var n="v2.3.5",v="https://api.activity.haoyousheng.com.cn/api/",r="http://api.shop.rp.surex.cc/v1/",b="https://api-t.hys-express.surex.cc/v1/",o="https://img.shop.haoyousheng.com.cn/wechat_icons",i="https://img.shop.haoyousheng.com.cn/",s=["x-ca-timestamp","x-ca-key","x-ca-nonce","x-ca-stage"].sort(),c={accept:"application/json","content-type":"application/json","x-application":"goodBuy","x-platform":"wx","x-useragent":"host","x-ver":n,"x-ca-timestamp":parseInt((new Date).getTime()/1e3),"x-ca-key":"24814519","x-ca-nonce":u.uuid(),"x-ca-stage":"RELEASE","x-scene":"1001","x-page":"pages/index/index{}","x-ca-signature-headers":s.join(",")};e.exports={Url:r,header:c,iconURL:o,shopImg:i,activeUrl:v,ExpUrl:b}},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createComponent=Sl,l.createPage=kl,l.default=void 0;var u=t(a("66fd"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return b(e)||r(e,l)||v()}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,l){var a=[],u=!0,t=!1,n=void 0;try{for(var v,r=e[Symbol.iterator]();!(u=(v=r.next()).done);u=!0)if(a.push(v.value),l&&a.length===l)break}catch(b){t=!0,n=b}finally{try{u||null==r["return"]||r["return"]()}finally{if(t)throw n}}return a}function b(e){if(Array.isArray(e))return e}function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function i(e){return f(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function d(e){return"function"===typeof e}function g(e){return"string"===typeof e}function y(e){return"[object Object]"===p.call(e)}function _(e,l){return h.call(e,l)}function m(){}function w(e){var l=Object.create(null);return function(a){var u=l[a];return u||(l[a]=e(a))}}var O=/-(\w)/g,k=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],$={},x={};function A(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?j(a):a}function j(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function D(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function E(e,l){Object.keys(l).forEach(function(a){-1!==S.indexOf(a)&&d(l[a])&&(e[a]=A(e[a],l[a]))})}function P(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==S.indexOf(a)&&d(l[a])&&D(e[a],l[a])})}function T(e,l){"string"===typeof e&&y(l)?E(x[e]||(x[e]={}),l):y(e)&&E($,e)}function C(e,l){"string"===typeof e?y(l)?P(x[e],l):delete x[e]:y(e)&&P($,e)}function I(e){return function(l){return e(l)||l}}function N(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function R(e,l){for(var a=!1,u=0;u<e.length;u++){var t=e[u];if(a)a=Promise.then(I(t));else{var n=t(l);if(N(n)&&(a=Promise.resolve(n)),!1===n)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function U(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var u=l[a];l[a]=function(l){R(e[a],l).then(function(e){return d(u)&&u(e)||e})}}}),l}function M(e,l){var a=[];Array.isArray($.returnValue)&&a.push.apply(a,i($.returnValue));var u=x[e];return u&&Array.isArray(u.returnValue)&&a.push.apply(a,i(u.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function L(e){var l=Object.create(null);Object.keys($).forEach(function(e){"returnValue"!==e&&(l[e]=$[e].slice())});var a=x[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function F(e,l,a){for(var u=arguments.length,t=new Array(u>3?u-3:0),n=3;n<u;n++)t[n-3]=arguments[n];var v=L(e);if(v&&Object.keys(v).length){if(Array.isArray(v.invoke)){var r=R(v.invoke,a);return r.then(function(e){return l.apply(void 0,[U(v,e)].concat(t))})}return l.apply(void 0,[U(v,a)].concat(t))}return l.apply(void 0,[a].concat(t))}var B={returnValue:function(e){return N(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},q=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,V=/^create|Manager$/,H=/^on/;function z(e){return V.test(e)}function J(e){return q.test(e)}function G(e){return H.test(e)}function W(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function X(e){return!(z(e)||J(e)||G(e))}function Y(e,l){return X(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length,t=new Array(u>1?u-1:0),n=1;n<u;n++)t[n-1]=arguments[n];return d(a.success)||d(a.fail)||d(a.complete)?M(e,F.apply(void 0,[e,l,a].concat(t))):M(e,W(new Promise(function(u,n){F.apply(void 0,[e,l,Object.assign({},a,{success:u,fail:n})].concat(t)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var K=1e-4,Q=750,Z=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,u=e.windowWidth;ee=u,le=a,Z="ios"===l}function ue(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Q*(l||ee);return a<0&&(a=-a),a=Math.floor(a+K),0===a?1!==le&&Z?.5:1:e<0?-a:a}var te={promiseInterceptor:B},ne=Object.freeze({upx2px:ue,interceptors:te,addInterceptor:T,removeInterceptor:C}),ve={},re=[],be=[],oe=["success","fail","cancel","complete"];function ie(e,l,a){return function(u){return l(ce(e,u,a))}}function se(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(l)){var n=!0===t?l:{};for(var v in d(a)&&(a=a(l,n)||{}),l)if(_(a,v)){var r=a[v];d(r)&&(r=r(l[v],l,n)),r?g(r)?n[r]=l[v]:y(r)&&(n[r.name?r.name:v]=r.value):console.warn("app-plus ".concat(e,"暂不支持").concat(v))}else-1!==oe.indexOf(v)?n[v]=ie(e,l[v],u):t||(n[v]=l[v]);return n}return d(l)&&(l=ie(e,l,u)),l}function ce(e,l,a){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(ve.returnValue)&&(l=ve.returnValue(e,l)),se(e,l,a,{},u)}function fe(e,l){if(_(ve,e)){var a=ve[e];return a?function(l,u){var t=a;d(a)&&(t=a(l)),l=se(e,l,t.args,t.returnValue);var n=[l];"undefined"!==typeof u&&n.push(u);var v=wx[t.name||e].apply(wx,n);return J(e)?ce(e,v,t.returnValue,z(e)):v}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),he=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function de(e){return function(l){var a=l.fail,u=l.complete,t={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};d(a)&&a(t),d(u)&&u(t)}}he.forEach(function(e){pe[e]=de(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new u.default),e};var e}();function ye(e,l,a){return e[l].apply(e,a)}function _e(){return ye(ge(),"$on",Array.prototype.slice.call(arguments))}function me(){return ye(ge(),"$off",Array.prototype.slice.call(arguments))}function we(){return ye(ge(),"$once",Array.prototype.slice.call(arguments))}function Oe(){return ye(ge(),"$emit",Array.prototype.slice.call(arguments))}var ke=Object.freeze({$on:_e,$off:me,$once:we,$emit:Oe});function Se(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function $e(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,u="0"===e.__uniapp_mask_id?{setStyle:function(e){var l=e.mask;Se("uni-tabview").setMask({color:l})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),t=e.show,n=e.hide,v=e.close,r=function(){u.setStyle({mask:a})},b=function(){u.setStyle({mask:"none"})};e.show=function(){r();for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return t.apply(e,a)},e.hide=function(){b();for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return n.apply(e,a)},e.close=function(){b(),l=[];for(var a=arguments.length,u=new Array(a),t=0;t<a;t++)u[t]=arguments[t];return v.apply(e,u)}}}function xe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&$e(l),l}var Ae=Object.freeze({getSubNVueById:xe,requireNativePlugin:Se}),je=Page,De=Component,Ee=/:/g,Pe=w(function(e){return k(e.replace(Ee,"-"))});function Te(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var u=arguments.length,t=new Array(u>1?u-1:0),n=1;n<u;n++)t[n-1]=arguments[n];return l.apply(e,[Pe(a)].concat(t))}}}function Ce(e,l){var a=l[e];l[e]=a?function(){Te(this);for(var e=arguments.length,l=new Array(e),u=0;u<e;u++)l[u]=arguments[u];return a.apply(this,l)}:function(){Te(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("onLoad",e),je(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("created",e),De(e)};var Ie=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ne(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){_(a,l)&&(e[l]=a[l])})}function Re(e,l){if(!l)return!0;if(u.default.options&&Array.isArray(u.default.options[e]))return!0;if(l=l.default||l,d(l))return!!d(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(d(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Re(e,l)}):void 0}function Ue(e,l,a){l.forEach(function(l){Re(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Me(e,l){var a;return l=l.default||l,d(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Le(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Fe(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Be(e,l){var a=e.data||{},u=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(t){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(t){}return y(a)||(a={}),Object.keys(u).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||_(a,e)||(a[e]=u[e])}),a}var qe=[String,Number,Boolean,Object,Array,null];function Ve(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function He(e,l){var a=e["behaviors"],u=e["extends"],t=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var v=[];return Array.isArray(a)&&a.forEach(function(e){v.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(u)&&u.props&&v.push(l({properties:Je(u.props,!0)})),Array.isArray(t)&&t.forEach(function(e){y(e)&&e.props&&v.push(l({properties:Je(e.props,!0)}))}),v}function ze(e,l,a,u){return Array.isArray(l)&&1===l.length?l[0]:l}function Je(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:Ve(e)}}):y(e)&&Object.keys(e).forEach(function(l){var u=e[l];if(y(u)){var t=u["default"];d(t)&&(t=t()),u.type=ze(l,u.type),a[l]={type:-1!==qe.indexOf(u.type)?u.type:null,value:t,observer:Ve(l)}}else{var n=ze(l,u);a[l]={type:-1!==qe.indexOf(n)?n:null,observer:Ve(l)}}}),a}function Ge(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=m,e.preventDefault=m,e.target=e.target||{},_(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function We(e,l){var a=e;return l.forEach(function(l){var u=l[0],t=l[2];if(u||"undefined"!==typeof t){var n=l[1],v=l[3],r=u?e.__get_value(u,a):a;Number.isInteger(r)?a=t:n?Array.isArray(r)?a=r.find(function(l){return e.__get_value(n,l)===t}):y(r)?a=Object.keys(r).find(function(l){return e.__get_value(n,r[l])===t}):console.error("v-for 暂不支持循环数据：",r):a=r[t],v&&(a=e.__get_value(v,a))}}),a}function Xe(e,l,a){var u={};return Array.isArray(l)&&l.length&&l.forEach(function(l,t){"string"===typeof l?l?"$event"===l?u["$"+t]=a:0===l.indexOf("$event.")?u["$"+t]=e.__get_value(l.replace("$event.",""),a):u["$"+t]=e.__get_value(l):u["$"+t]=e:u["$"+t]=We(e,l)}),u}function Ye(e){for(var l={},a=1;a<e.length;a++){var u=e[a];l[u[0]]=u[1]}return l}function Ke(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],t=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,v=!1;if(t&&(v=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return v?[l]:l.detail.__args__||l.detail;var r=Xe(e,u,l),b=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||t?t&&!v?b.push(l.detail.__args__[0]):b.push(l):b.push(l.target.value):Array.isArray(e)&&"o"===e[0]?b.push(Ye(e)):"string"===typeof e&&_(r,e)?b.push(r[e]):b.push(e)}),b}var Qe="~",Ze="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Ge(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var u=a.eventOpts||a["event-opts"];if(!u)return console.warn("事件信息不存在");var t=e.type,n=[];return u.forEach(function(a){var u=a[0],v=a[1],r=u.charAt(0)===Ze;u=r?u.slice(1):u;var b=u.charAt(0)===Qe;u=b?u.slice(1):u,v&&el(t,u)&&v.forEach(function(a){var u=a[0];if(u){var t=l.$vm;t.$options.generic&&t.$parent&&t.$parent.$parent&&(t=t.$parent.$parent);var v=t[u];if(!d(v))throw new Error(" _vm.".concat(u," is not a function"));if(b){if(v.once)return;v.once=!0}n.push(v.apply(t,Ke(l.$vm,e,a[1],a[2],r,u)))}})}),"input"===t&&1===n.length&&"undefined"!==typeof n[0]?n[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function ul(e,l){var a=l.mocks,t=l.initRefs;e.$options.store&&(u.default.prototype.$store=e.$options.store),u.default.prototype.mpHost="app-plus",u.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(t(this),Ne(this,a)))}});var n={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return n.globalData=e.$options.globalData||{},Ue(n,al),n}var tl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function nl(e,l){var a=e.$children,u=a.find(function(e){return e.$scope._$vueId===l});if(u)return u;for(var t=a.length-1;t>=0;t--)if(u=nl(a[t],l),u)return u}function vl(e){return Behavior(e)}function rl(){return!!this.route}function bl(e){this.triggerEvent("__l",e)}function ol(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var u=l.selectAllComponents(".vue-ref-in-for");return u.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function il(e){var l,a=e.detail||e.value,u=a.vuePid,t=a.vueOptions;u&&(l=nl(this.$vm,u)),l||(l=this.$vm),t.parent=l}function sl(e){return ul(e,{mocks:tl,initRefs:ol})}var cl=["onUniNViewMessage"];function fl(e){var l=sl(e);return Ue(l,cl),l}function pl(e){return App(fl(e)),e}function hl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,t=l.initRelation,v=Me(u.default,e),r=n(v,2),b=r[0],o=r[1],i={options:{multipleSlots:!0,addGlobalClass:!0},data:Be(o,u.default.prototype),behaviors:He(o,vl),properties:Je(o.props,!1,o.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Fe(e.vueId,this),t.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new b(l),Le(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:il,__e:ll}};return Array.isArray(o.wxsCallMethods)&&o.wxsCallMethods.forEach(function(e){i.methods[e]=function(l){return this.$vm[e](l)}}),a?i:[i,b]}function dl(e){return hl(e,{isPage:rl,initRelation:bl})}function gl(e){var l=dl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var yl=["onShow","onHide","onUnload"];function _l(e,l){l.isPage,l.initRelation;var a=gl(e);return Ue(a.methods,yl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function ml(e){return _l(e,{isPage:rl,initRelation:bl})}yl.push.apply(yl,Ie);var wl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ol(e){var l=ml(e);return Ue(l.methods,wl),l}function kl(e){return Component(Ol(e))}function Sl(e){return Component(gl(e))}re.forEach(function(e){ve[e]=!1}),be.forEach(function(e){var l=ve[e]&&ve[e].name?ve[e].name:e;wx.canIUse(l)||(ve[e]=!1)});var $l={};Object.keys(ne).forEach(function(e){$l[e]=ne[e]}),Object.keys(ke).forEach(function(e){$l[e]=ke[e]}),Object.keys(Ae).forEach(function(e){$l[e]=Y(e,Ae[e])}),Object.keys(wx).forEach(function(e){(_(wx,e)||_(ve,e))&&($l[e]=Y(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=$l,e.UniEmitter=ke),wx.createApp=pl,wx.createPage=kl,wx.createComponent=Sl;var xl=$l,Al=xl;l.default=Al}).call(this,a("c8ba"))},"733c":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=function(e){return e<10?"0"+e:e+""},t={date:{init:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",t=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,b=new Date,o=[],i=new Date(e.toString()),s=new Date(l.toString());e>l&&(i=new Date(l.toString()),s=new Date(e.toString()));for(var c=i.getFullYear(),f=(i.getMonth(),s.getFullYear()),p=[],h=[],d=[],g=[],y=[],_=[],m=[],w=[],O=v?1*n[1]:n[1]+1,k=b.getFullYear(),S=b.getMonth()+1,$=b.getDate(),x=new Date(c,O,0).getDate(),A=c;A<=f;A++)p.push(A+"");var j=p[n[0]];switch(a){case"half":case"date":case"yearMonth":if(r&&j==k){for(var D=1;D<=S;D++)h.push(u(D));for(var E=1;E<=$;E++)d.push(u(E))}else{for(var P=1;P<=12;P++)h.push(u(P));for(var T=1;T<=x;T++)d.push(u(T))}break;default:for(var C=1;C<=12;C++)h.push(u(C));for(var I=1;I<=x;I++)d.push(u(I));break}for(var N=0;N<24;N++)g.push(u(N));for(var R=0;R<60;R+=1*t)y.push(u(R));for(var U=0;U<60;U++)_.push(u(U));switch(v&&(w=[p.indexOf(n[0]),h.indexOf(n[1]),d.indexOf(n[2]),g.indexOf(n[3]),-1==y.indexOf(n[4])?0:y.indexOf(n[4]),_.indexOf(n[5])]),a){case"range":return v?(o=[w[0],w[1],w[2],0,w[0],w[1],w[2]],{years:p,months:h,days:d,defaultVal:o}):{years:p,months:h,days:d};case"date":return v?(o=[w[0],w[1],w[2]],{years:p,months:h,days:d,defaultVal:o}):{years:p,months:h,days:d};case"half":return m=[{label:"上午",value:0},{label:"下午",value:1}],v?(o=[w[0],w[1],w[2],w[3]],{years:p,months:h,days:d,areas:m,defaultVal:o}):{years:p,months:h,days:d,areas:m};case"yearMonth":return v?(o=[w[0],w[1]],{years:p,months:h,defaultVal:o}):{years:p,months:h};case"dateTime":return v?(o=w,{years:p,months:h,days:d,hours:g,minutes:y,seconds:_,defaultVal:o}):{years:p,months:h,days:d,hours:g,minutes:y,seconds:_};case"time":return v?(o=[w[3],w[4],w[5]],{hours:g,minutes:y,seconds:_,defaultVal:o}):{hours:g,minutes:y,seconds:_}}},initMonths:function(e,l){var a=new Date,t=a.getFullYear(),n=a.getMonth()+1,v=(a.getDate(),t==e),r=[];if(v&&l)for(var b=1;b<=n;b++)r.push(u(b));else for(var o=1;o<=12;o++)r.push(u(o));return r},initDays:function(e,l,a){var t=new Date,n=t.getFullYear(),v=t.getMonth()+1,r=t.getDate(),b=n==e&&v==l,o=new Date(e,l,0).getDate(),i=[];if(b&&a)for(var s=1;s<=r;s++)i.push(u(s));else for(var c=1;c<=o;c++)i.push(u(c));return i}},limitHour:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=new Date,a=[],t=[],n=[],v=(new Date).getHours(),r=["周日","周一","周二","周三","周四","周五","周六"],b=0;b<e;b++){var o=void 0,i=void 0,s=void 0,c=void 0;o=l.getFullYear(),i=u(l.getMonth()+1),s=u(l.getDate()),c=r[l.getDay()];var f="";switch(b){case 0:f="今天";break;case 1:f="明天";break;case 2:f="后天";break;default:f=i+"月"+s+"日 "+c;break}a.push({label:f,value:o+"-"+i+"-"+s,today:0==b}),l.setDate(l.getDate()+1)}t=v>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var p=v>12?v-12:v;p<=12;p++)n.push({label:u(p),value:u(v>12?p+12:p)});return{date:a,areas:t,hours:n}},initAreas:function(e){var l=[],a=(new Date).getHours();return l=e.today&&a>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],l},initHours:function(e,l){var a=[],t=(new Date).getHours();if(e.today)if(1==l.value&&t<=12)for(var n=1;n<=12;n++)a.push({label:u(n),value:u(1==l.value?n+12:n)});else for(var v=t>12?t-12:t;v<=12;v++)a.push({label:u(v),value:u(1==l.value?v+12:v)});else for(var r=1;r<=12;r++)a.push({label:u(r),value:u(1==l.value?r+12:r)});return a}},limit:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,v=new Date,r=new Date((new Date).getTime()+60*n*1e3),b=[],o=[],i=[],s=r.getHours(),c=Math.floor(r.getMinutes()/t)*t,f=["周日","周一","周二","周三","周四","周五","周六"],p=0;p<e;p++){var h=void 0,d=void 0,g=void 0,y=void 0;h=v.getFullYear(),d=u(v.getMonth()+1),g=u(v.getDate()),y=f[v.getDay()];var _="";switch(p){case 0:_="今天";break;case 1:_="明天";break;case 2:_="后天";break;default:_=d+"月"+g+"日 "+y;break}b.push({label:_,value:h+"-"+d+"-"+g,flag:0==p}),v.setDate(v.getDate()+1)}s<l&&(s=l),s>a&&(s=a);for(var m=1*s;m<=1*a;m++)o.push({label:u(m),value:u(m),flag:m==s});for(var w=c;w<60;w+=1*t)i.push({label:u(w),value:u(w)});return{date:b,hours:o,minutes:i}},initHours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),t=arguments.length>4?arguments[4]:void 0,n=[],v=t.split("-"),r=new Date,b=r.getFullYear(),o=r.getMonth()+1,i=r.getDate(),s=new Date((new Date).getTime()+60*a*1e3),c=s.getHours(),f=b==v[0]&&o==v[1]&&i==v[2];if(c>l&&(c=l),f)for(var p=1*c;p<=1*l;p++)n.push({label:u(p),value:u(p),flag:p==c});else for(var h=1*e;h<=1*l;h++)n.push({label:u(h),value:u(h),flag:!1});return n},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,a=arguments.length>4?arguments[4]:void 0,t=arguments.length>5?arguments[5]:void 0,n=[],v=new Date((new Date).getTime()+60*l*1e3),r=a.split("-"),b=new Date,o=b.getFullYear(),i=b.getMonth()+1,s=b.getDate(),c=v.getHours(),f=Math.floor(v.getMinutes()/e)*e,p=o==r[0]&&i==r[1]&&s==r[2];if(p)if(t==c)for(var h=f;h<60;h+=1*e)n.push({label:u(h),value:u(h)});else for(var d=0;d<60;d+=1*e)n.push({label:u(d),value:u(d)});else for(var g=0;g<60;g+=1*e)n.push({label:u(g),value:u(g)});return n}},range:{init:function(e,l,a,t){new Date;var n=[],v=new Date(e.toString()),r=new Date(l.toString());e>l&&(v=new Date(l.toString()),r=new Date(e.toString()));for(var b=v.getFullYear(),o=(v.getMonth(),r.getFullYear()),i=[],s=[],c=[],f=[],p=[],h=[],d=t?1*a[1]:a[1]+1,g=new Date(b,d,0).getDate(),y=b;y<=o;y++)i.push(y+"");for(var _=1;_<=12;_++)s.push(u(_));for(var m=1;m<=g;m++)c.push(u(m));for(var w=b;w<=o;w++)f.push(w+"");for(var O=1;O<=12;O++)p.push(u(O));for(var k=1;k<=g;k++)h.push(u(k));return t?(n=[i.indexOf(a[0]),s.indexOf(a[1]),c.indexOf(a[2]),0,f.indexOf(a[0]),p.indexOf(a[1]),h.indexOf(a[2])],{fyears:i,fmonths:s,fdays:c,tyears:f,tmonths:p,tdays:h,defaultVal:n}):{fyears:i,fmonths:s,fdays:c,tyears:f,tmonths:p,tdays:h}},initDays:function(e,l){for(var a=new Date(e,l,0).getDate(),t=[],n=1;n<=a;n++)t.push(u(n));return t}}},n=t;l.default=n},"79b1":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],t=u;l.default=t},"7eb0":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u={appid:"__UNI__0611EAA"};l.default=u},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},8489:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=r(a("a34a")),t=r(a("5bd2")),n=r(a("69dc")),v=a("bd7b");function r(e){return e&&e.__esModule?e:{default:e}}function b(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){o(e,l,a[l])})}return e}function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function i(e,l,a,u,t,n,v){try{var r=e[n](v),b=r.value}catch(o){return void a(o)}r.done?l(b):Promise.resolve(b).then(u,t)}function s(e){return function(){var l=this,a=arguments;return new Promise(function(u,t){var n=e.apply(l,a);function v(e){i(n,u,t,v,r,"next",e)}function r(e){i(n,u,t,v,r,"throw",e)}v(void 0)})}}var c=!1;function f(e){return p.apply(this,arguments)}function p(){return p=s(u.default.mark(function e(l){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return l.header["X-WAREHOUSE"]=(0,v.getStorageSync)("city").warehouse_id,l.header["X-PickUp"]=(0,v.getStorageSync)("pickup").pickup_id||"",l.header["x-ca-systemInfo"]=(0,v.getSysteminfo)("systemInfo"),2==l.header.thisUrl&&(l.baseUrl=n.default.activeUrl),e.abrupt("return",l);case 5:case"end":return e.stop()}},e,this)})),p.apply(this,arguments)}function h(){var e=!1,l=!1;return s(u.default.mark(function a(){return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return e||(e=!0,getNewTokenServe().then(function(a){(0,v.setTokenStorage)(a.data.data.token),l=!0,e=!1}).catch(function(){l=!1,e=!1})),a.abrupt("return",new Promise(function(a){var u=setInterval(function(){e||(clearInterval(u),a(l?"success":"fail"))},100)}));case 2:case"end":return a.stop()}},a,this)}))}var d=new t.default;d.setConfig(function(e){return e.baseUrl=n.default.Url,e});var g=new t.default;h();g.setConfig(function(e){return e.baseUrl=n.default.Url,e.header=b({},e.header,n.default.header),e}),g.validateStatus=function(e){return 200===e},g.interceptor.request(function(e,l){return e.header=b({},e.header,{"X-Authorization":(0,v.getTokenStorage)()}),f(e).then(function(l){e=l}),e.header["isExp"]?e.baseUrl=n.default.ExpUrl:e.baseUrl=n.default.Url,e}),g.interceptor.response(function(){var l=s(u.default.mark(function l(a){return u.default.wrap(function(l){while(1)switch(l.prev=l.next){case 0:if("token验证失败"!==a.data.msg){l.next=5;break}if(!c){l.next=3;break}return l.abrupt("return");case 3:c=!0,e.showModal({content:"该功能需要登录，请先登录",title:"提示",success:function(l){c=!1,l.confirm?(e.removeStorage({key:"X-Authorization"}),e.removeStorage({key:"isLogin"}),e.navigateTo({url:"/pages/login/login"})):e.navigateBack()}});case 5:return l.abrupt("return",a);case 6:case"end":return l.stop()}},l,this)}));return function(e){return l.apply(this,arguments)}}(),function(e){return e});var y=g;l.default=y}).call(this,a("6e42")["default"])},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function u(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?t(e):l}function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function v(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&r(e,l)}function r(e,l){return r=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},r(e,l)}function b(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function o(e,l){for(var a=0;a<l.length;a++){var u=l[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function i(e,l,a){return l&&o(e.prototype,l),a&&o(e,a),e}var s=l.version,c="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,h=300,d=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function _(){var l="";if("n"===k()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(g)}catch(a){l=y}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,l)}catch(a){e.setStorageSync(g,y)}}return l}var m=function(e){var l=Object.keys(e),a=l.sort(),u={},t="";for(var n in a)u[a[n]]=e[a[n]],t+=a[n]+"="+e[a[n]]+"&";return{sign:"",options:t.substr(0,t.length-1)}},w=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},O=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},S=function(){var l="";return"wx"!==k()&&"qq"!==k()||e.canIUse("getAccountInfoSync")&&(l=e.getAccountInfoSync().miniProgram.appId||""),l},$=function(){return"n"===k()?plus.runtime.version:""},x=function(){var e=k(),l="";return"n"===e&&(l=plus.runtime.channel),l},A=function(l){var a=k(),u="";return l||("wx"===a&&(u=e.getLaunchOptionsSync().scene),u)},j="First__Visit__Time",D="Last__Visit__Time",E=function(){var l=e.getStorageSync(j),a=0;return l?a=l:(a=O(),e.setStorageSync(j,a),e.removeStorageSync(D)),a},P=function(){var l=e.getStorageSync(D),a=0;return a=l||"",e.setStorageSync(D,O()),a},T="__page__residence__time",C=0,I=0,N=function(){return C=O(),"n"===k()&&e.setStorageSync(T,O()),C},R=function(){return I=O(),"n"===k()&&(C=e.getStorageSync(T)),I-C},U="Total__Visit__Count",M=function(){var l=e.getStorageSync(U),a=1;return l&&(a=l,a++),e.setStorageSync(U,a),a},L=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},F=0,B=0,q=function(){var e=(new Date).getTime();return F=e,B=0,e},V=function(){var e=(new Date).getTime();return B=e,e},H=function(e){var l=0;if(0!==F&&(l=B-F),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>h;return{residenceTime:l,overtime:a}}if("page"===e){var u=l>p;return{residenceTime:l,overtime:u}}return{residenceTime:l}},z=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===k()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},J=function(e){var l=getCurrentPages(),a=l[l.length-1],u=a.$vm,t=e._query,n=t&&"{}"!==JSON.stringify(t)?"?"+JSON.stringify(t):"";return e._query="","bd"===k()?u.$mp&&u.$mp.page.is+n:u.$scope&&u.$scope.route+n||u.$mp&&u.$mp.page.route+n},G=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},W=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=a("00b4").default,Y=a("7eb0").default||a("7eb0"),K=e.getSystemInfoSync(),Q=function(){function l(){b(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:k(),mpn:S(),ak:Y.appid,usv:s,v:$(),ch:x(),cn:"",pn:"",ct:"",t:O(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return i(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){V();var e=H("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,V();var a=H();q();var u=J(this);this._sendHideRequest({urlref:u,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=J(this),l=z();if(this._navigationBarTitle.config=X&&X.pages[l]&&X.pages[l].titleNView&&X.pages[l].titleNView.titleText||X&&X.pages[l]&&X.pages[l].navigationBarTitleText||"",this.__licationShow)return q(),this.__licationShow=!1,void(this._lastPageRoute=e);V(),this._lastPageRoute=e;var a=H("page");if(a.overtime){var u={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(u)}q()}},{key:"_pageHide",value:function(){if(!this.__licationHide){V();var e=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=O(),this.statData.sc=A(e.scene),this.statData.fvts=E(),this.statData.lvts=P(),this.statData.tvc=M(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,u=e.urlref_ts;this._navigationBarTitle.lt="11";var t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(t)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,u=e.urlref_ts,t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(t,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,u=e.value,t=void 0===u?"":u,n=this._lastPageRoute,v={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:n,ch:this.statData.ch,e_n:a,e_v:"object"===typeof t?JSON.stringify(t):t.toString(),usv:this.statData.usv,t:O(),p:this.statData.p};this.request(v)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;Y.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var u=this,t=O(),n=this._navigationBarTitle;l.ttn=n.page,l.ttpj=n.config,l.ttc=n.report;var v=this._reportingRequestData;if("n"===k()&&(v=e.getStorageSync("__UNI__STAT__DATA")||{}),v[l.lt]||(v[l.lt]=[]),v[l.lt].push(l),"n"===k()&&e.setStorageSync("__UNI__STAT__DATA",v),!(R()<d)||a){var r=this._reportingRequestData;"n"===k()&&(r=e.getStorageSync("__UNI__STAT__DATA")),N();var b=[],o=[],i=[],c=function(e){var l=r[e];l.forEach(function(l){var a=w(l);0===e?b.push(a):3===e?i.push(a):o.push(a)})};for(var f in r)c(f);b.push.apply(b,o.concat(i));var p={usv:s,t:t,requests:JSON.stringify(b)};this._reportingRequestData={},"n"===k()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){u._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=m(L(e)).options;l.src=f+"?"+a}},{key:"sendEvent",value:function(e,l){W(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Z=function(l){function a(){var l;return b(this,a),l=u(this,n(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return v(a,l),i(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),i(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,N(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,G(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,G(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:O(),p:this.statData.p};this.request(a)}}]),a}(Q),ee=Z.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function ue(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}ue()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,u=Object.prototype,t=u.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},v=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",b=n.toStringTag||"@@toStringTag",o="object"===typeof e,i=l.regeneratorRuntime;if(i)o&&(e.exports=i);else{i=l.regeneratorRuntime=o?e.exports:{},i.wrap=m;var s="suspendedStart",c="suspendedYield",f="executing",p="completed",h={},d={};d[v]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(T([])));y&&y!==u&&t.call(y,v)&&(d=y);var _=S.prototype=O.prototype=Object.create(d);k.prototype=_.constructor=S,S.constructor=k,S[b]=k.displayName="GeneratorFunction",i.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===k||"GeneratorFunction"===(l.displayName||l.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,b in e||(e[b]="GeneratorFunction")),e.prototype=Object.create(_),e},i.awrap=function(e){return{__await:e}},$(x.prototype),x.prototype[r]=function(){return this},i.AsyncIterator=x,i.async=function(e,l,a,u){var t=new x(m(e,l,a,u));return i.isGeneratorFunction(l)?t:t.next().then(function(e){return e.done?e.value:t.next()})},$(_),_[b]="Generator",_[v]=function(){return this},_.toString=function(){return"[object Generator]"},i.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var u=l.pop();if(u in e)return a.value=u,a.done=!1,a}return a.done=!0,a}},i.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!e)for(var l in this)"t"===l.charAt(0)&&t.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function u(u,t){return r.type="throw",r.arg=e,l.next=u,t&&(l.method="next",l.arg=a),!!t}for(var n=this.tryEntries.length-1;n>=0;--n){var v=this.tryEntries[n],r=v.completion;if("root"===v.tryLoc)return u("end");if(v.tryLoc<=this.prev){var b=t.call(v,"catchLoc"),o=t.call(v,"finallyLoc");if(b&&o){if(this.prev<v.catchLoc)return u(v.catchLoc,!0);if(this.prev<v.finallyLoc)return u(v.finallyLoc)}else if(b){if(this.prev<v.catchLoc)return u(v.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<v.finallyLoc)return u(v.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a];if(u.tryLoc<=this.prev&&t.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var n=u;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=l&&l<=n.finallyLoc&&(n=null);var v=n?n.completion:{};return v.type=e,v.arg=l,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(v)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),h},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),h}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var u=a.completion;if("throw"===u.type){var t=u.arg;E(a)}return t}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,u){return this.delegate={iterator:T(e),resultName:l,nextLoc:u},"next"===this.method&&(this.arg=a),h}}}function m(e,l,a,u){var t=l&&l.prototype instanceof O?l:O,n=Object.create(t.prototype),v=new P(u||[]);return n._invoke=A(e,a,v),n}function w(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(u){return{type:"throw",arg:u}}}function O(){}function k(){}function S(){}function $(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function x(e){function l(a,u,n,v){var r=w(e[a],e,u);if("throw"!==r.type){var b=r.arg,o=b.value;return o&&"object"===typeof o&&t.call(o,"__await")?Promise.resolve(o.__await).then(function(e){l("next",e,n,v)},function(e){l("throw",e,n,v)}):Promise.resolve(o).then(function(e){b.value=e,n(b)},function(e){return l("throw",e,n,v)})}v(r.arg)}var a;function u(e,u){function t(){return new Promise(function(a,t){l(e,u,a,t)})}return a=a?a.then(t,t):t()}this._invoke=u}function A(e,l,a){var u=s;return function(t,n){if(u===f)throw new Error("Generator is already running");if(u===p){if("throw"===t)throw n;return C()}a.method=t,a.arg=n;while(1){var v=a.delegate;if(v){var r=j(v,a);if(r){if(r===h)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===s)throw u=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=f;var b=w(e,l,a);if("normal"===b.type){if(u=a.done?p:c,b.arg===h)continue;return{value:b.arg,done:a.done}}"throw"===b.type&&(u=p,a.method="throw",a.arg=b.arg)}}}function j(e,l){var u=e.iterator[l.method];if(u===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,j(e,l),"throw"===l.method))return h;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var t=w(u,e.iterator,l.arg);if("throw"===t.type)return l.method="throw",l.arg=t.arg,l.delegate=null,h;var n=t.arg;return n?n.done?(l[e.resultName]=n.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,h):n:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,h)}function D(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function E(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function T(e){if(e){var l=e[v];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var u=-1,n=function l(){while(++u<e.length)if(t.call(e,u))return l.value=e[u],l.done=!1,l;return l.value=a,l.done=!0,l};return n.next=n}}return{next:C}}function C(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(e,l,a){e.exports=a("bbdd")},bbdd:function(e,l,a){var u=function(){return this||"object"===typeof self&&self}()||Function("return this")(),t=u.regeneratorRuntime&&Object.getOwnPropertyNames(u).indexOf("regeneratorRuntime")>=0,n=t&&u.regeneratorRuntime;if(u.regeneratorRuntime=void 0,e.exports=a("96cf"),t)u.regeneratorRuntime=n;else try{delete u.regeneratorRuntime}catch(v){u.regeneratorRuntime=void 0}},bd7b:function(e,l,a){"use strict";(function(e,u){Object.defineProperty(l,"__esModule",{value:!0}),l.clearAllStorage=c,l.uuid=f,l.sortData=p,l.setUserInfo=l.getRouter=l.configHandle=l.setStorageSync=l.getSysteminfo=l.getStorageSync=l.WxSilentLogin=l.getQRcode=l.getTokenStorage=l.setTokenStorage=void 0;var t=n(a("27e2"));function n(e){return e&&e.__esModule?e:{default:e}}function v(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){r(e,l,a[l])})}return e}function r(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var b=function(l){e.setStorageSync("X-Authorization",l)};l.setTokenStorage=b;var o=function(){var l="";try{l=e.getStorageSync("X-Authorization")}catch(a){}return l};l.getTokenStorage=o;var i=function(){e.scanCode({onlyFromCamera:!0,success:function(e){return console.log(u(e," at utils\\tool.js:25")),e.result},fail:function(e){}})};l.getQRcode=i;var s=function(l){e.login({provider:"weixin",success:function(a){console.log(u(a," at utils\\tool.js:39")),t.default.getToken({oauthCode:a.code}).then(function(a){e.getUserInfo({provider:"weixin",success:function(e){b(a.data.result.token),g("userInfo",e.rawData),g("isLogin",!0),l(e.rawData)},fail:function(){e.reLaunch({url:"../../pages/login/login"})}})})},fail:function(){e.reLaunch({url:"../../pages/login/login"})}})};function c(){e.showLoading({title:"退出中"}),e.getStorageInfo({success:function(l){var a=l.keys.length;l.keys.forEach(function(l){e.removeStorage({key:l,success:function(){a--,0==a&&(e.hideLoading(),e.showToast({title:"退出成功",icon:"none"}))}})})},fail:function(){e.hideLoading(),toast("退出失败")}})}function f(e,l){var a,u,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),n=[];if(l=l||t.length,e)for(a=0;a<e;a++)n[a]=t[0|Math.random()*l];else for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",a=0;a<36;a++)n[a]||(u=0|16*Math.random(),n[a]=t[19==a?3&u|8:u]);return n.join("")}function p(e,l){for(var a=/^[A-Z]$/,u=[],t="",n=0;n<e.length;n++)u["#"]=[],t=e[n][l].slice(0,1).toUpperCase(),a.test(t)||(t="#"),t in u||(u[t]=[]),u[t].push(e[n]);var v=[];for(var r in u)v.push({letter:r,list:u[r]});v.sort(function(e,l){return e.letter.charCodeAt(0)-l.letter.charCodeAt(0)});v[0];v.splice(0,1);for(var b={},o=0;o<v.length;o++)b[v[o].letter]=v[o].list;return v}l.WxSilentLogin=s;var h=function(l){var a=null;try{a=e.getStorageSync(l)}catch(u){}return a};l.getStorageSync=h;var d=function(l){var a=h(l);return a||e.getSystemInfo({success:function(u){return g("systemInfo",u),a=e.getStorageSync(l),JSON.stringify(a)}}),JSON.stringify(a)};l.getSysteminfo=d;var g=function(l,a){e.setStorageSync(l,a)};l.setStorageSync=g;var y=function(e){return e.header=v({},e.header,{"X-Authorization":o()}),e};l.configHandle=y;var _=function(e){var l=getCurrentPages(),a=l[l.length-Number(e)];return a.$vm};l.getRouter=_;var m=function(l){e.setStorageSync("info",l)};l.setUserInfo=m}).call(this,a("6e42")["default"],a("0de9")["default"])},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(u){"object"===typeof window&&(a=window)}e.exports=a},d422:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],t=u;l.default=t},fae8:function(e,l,a){}}]);
=======
var a=Object.freeze({});function u(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function v(e){return!0===e}function n(e){return!1===e}function r(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function b(e){return null!==e&&"object"===typeof e}var o=Object.prototype.toString;function i(e){return"[object Object]"===o.call(e)}function c(e){return"[object RegExp]"===o.call(e)}function s(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return t(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||i(e)&&e.toString===o?JSON.stringify(e,null,2):String(e)}function d(e){var l=parseFloat(e);return isNaN(l)?e:l}function h(e,l){for(var a=Object.create(null),u=e.split(","),t=0;t<u.length;t++)a[u[t]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}h("slot,component",!0);var y=h("key,ref,slot,slot-scope,is");function g(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var m=Object.prototype.hasOwnProperty;function _(e,l){return m.call(e,l)}function w(e){var l=Object.create(null);return function(a){var u=l[a];return u||(l[a]=e(a))}}var O=/-(\w)/g,$=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),k=w(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),x=/\B([A-Z])/g,j=w(function(e){return e.replace(x,"-$1").toLowerCase()});function A(e,l){function a(a){var u=arguments.length;return u?u>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function S(e,l){return e.bind(l)}var P=Function.prototype.bind?S:A;function E(e,l){l=l||0;var a=e.length-l,u=new Array(a);while(a--)u[a]=e[a+l];return u}function D(e,l){for(var a in l)e[a]=l[a];return e}function C(e){for(var l={},a=0;a<e.length;a++)e[a]&&D(l,e[a]);return l}function U(e,l,a){}var T=function(e,l,a){return!1},I=function(e){return e};function M(e,l){if(e===l)return!0;var a=b(e),u=b(l);if(!a||!u)return!a&&!u&&String(e)===String(l);try{var t=Array.isArray(e),v=Array.isArray(l);if(t&&v)return e.length===l.length&&e.every(function(e,a){return M(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(t||v)return!1;var n=Object.keys(e),r=Object.keys(l);return n.length===r.length&&n.every(function(a){return M(e[a],l[a])})}catch(o){return!1}}function L(e,l){for(var a=0;a<e.length;a++)if(M(e[a],l))return a;return-1}function N(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var F=["component","directive","filter"],R=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:U,parsePlatformTagName:I,mustUseProp:T,async:!0,_lifecycleHooks:R},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function q(e,l,a,u){Object.defineProperty(e,l,{value:a,enumerable:!!u,writable:!0,configurable:!0})}var z=new RegExp("[^"+B.source+".$_\\d]");function W(e){if(!z.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var G,J="__proto__"in{},X="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Q=X&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),le=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===K),ae=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(X)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ue)}catch(lt){}var te=function(){return void 0===G&&(G=!X&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},ve=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ne(e){return"function"===typeof e&&/native code/.test(e.toString())}var re,be="undefined"!==typeof Symbol&&ne(Symbol)&&"undefined"!==typeof Reflect&&ne(Reflect.ownKeys);re="undefined"!==typeof Set&&ne(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var oe=U,ie=0,ce=function(){this.id=ie++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){g(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},ce.target=null;var se=[];function fe(e){se.push(e),ce.target=e}function pe(){se.pop(),ce.target=se[se.length-1]}var de=function(e,l,a,u,t,v,n,r){this.tag=e,this.data=l,this.children=a,this.text=u,this.elm=t,this.ns=void 0,this.context=v,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=n,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=r,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(de.prototype,he);var ye=function(e){void 0===e&&(e="");var l=new de;return l.text=e,l.isComment=!0,l};function ge(e){return new de(void 0,void 0,void 0,String(e))}function me(e){var l=new de(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var _e=Array.prototype,we=Object.create(_e),Oe=["push","pop","shift","unshift","splice","sort","reverse"];Oe.forEach(function(e){var l=_e[e];q(we,e,function(){var a=[],u=arguments.length;while(u--)a[u]=arguments[u];var t,v=l.apply(this,a),n=this.__ob__;switch(e){case"push":case"unshift":t=a;break;case"splice":t=a.slice(2);break}return t&&n.observeArray(t),n.dep.notify(),v})});var $e=Object.getOwnPropertyNames(we),ke=!0;function xe(e){ke=e}var je=function(e){this.value=e,this.dep=new ce,this.vmCount=0,q(e,"__ob__",this),Array.isArray(e)?(J?Ae(e,we):Se(e,we,$e),this.observeArray(e)):this.walk(e)};function Ae(e,l){e.__proto__=l}function Se(e,l,a){for(var u=0,t=a.length;u<t;u++){var v=a[u];q(e,v,l[v])}}function Pe(e,l){var a;if(b(e)&&!(e instanceof de))return _(e,"__ob__")&&e.__ob__ instanceof je?a=e.__ob__:ke&&!te()&&(Array.isArray(e)||i(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new je(e)),l&&a&&a.vmCount++,a}function Ee(e,l,a,u,t){var v=new ce,n=Object.getOwnPropertyDescriptor(e,l);if(!n||!1!==n.configurable){var r=n&&n.get,b=n&&n.set;r&&!b||2!==arguments.length||(a=e[l]);var o=!t&&Pe(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=r?r.call(e):a;return ce.target&&(v.depend(),o&&(o.dep.depend(),Array.isArray(l)&&Ue(l))),l},set:function(l){var u=r?r.call(e):a;l===u||l!==l&&u!==u||r&&!b||(b?b.call(e,l):a=l,o=!t&&Pe(l),v.notify())}})}}function De(e,l,a){if(Array.isArray(e)&&s(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var u=e.__ob__;return e._isVue||u&&u.vmCount?a:u?(Ee(u.value,l,a),u.dep.notify(),a):(e[l]=a,a)}function Ce(e,l){if(Array.isArray(e)&&s(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||_(e,l)&&(delete e[l],a&&a.dep.notify())}}function Ue(e){for(var l=void 0,a=0,u=e.length;a<u;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Ue(l)}je.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Ee(e,l[a])},je.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Pe(e[l])};var Te=V.optionMergeStrategies;function Ie(e,l){if(!l)return e;for(var a,u,t,v=be?Reflect.ownKeys(l):Object.keys(l),n=0;n<v.length;n++)a=v[n],"__ob__"!==a&&(u=e[a],t=l[a],_(e,a)?u!==t&&i(u)&&i(t)&&Ie(u,t):De(e,a,t));return e}function Me(e,l,a){return a?function(){var u="function"===typeof l?l.call(a,a):l,t="function"===typeof e?e.call(a,a):e;return u?Ie(u,t):t}:l?e?function(){return Ie("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Le(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Ne(a):a}function Ne(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Fe(e,l,a,u){var t=Object.create(e||null);return l?D(t,l):t}Te.data=function(e,l,a){return a?Me(e,l,a):l&&"function"!==typeof l?e:Me(e,l)},R.forEach(function(e){Te[e]=Le}),F.forEach(function(e){Te[e+"s"]=Fe}),Te.watch=function(e,l,a,u){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var t={};for(var v in D(t,e),l){var n=t[v],r=l[v];n&&!Array.isArray(n)&&(n=[n]),t[v]=n?n.concat(r):Array.isArray(r)?r:[r]}return t},Te.props=Te.methods=Te.inject=Te.computed=function(e,l,a,u){if(!e)return l;var t=Object.create(null);return D(t,e),l&&D(t,l),t},Te.provide=Me;var Re=function(e,l){return void 0===l?e:l};function Ve(e,l){var a=e.props;if(a){var u,t,v,n={};if(Array.isArray(a)){u=a.length;while(u--)t=a[u],"string"===typeof t&&(v=$(t),n[v]={type:null})}else if(i(a))for(var r in a)t=a[r],v=$(r),n[v]=i(t)?t:{type:t};else 0;e.props=n}}function Be(e,l){var a=e.inject;if(a){var u=e.inject={};if(Array.isArray(a))for(var t=0;t<a.length;t++)u[a[t]]={from:a[t]};else if(i(a))for(var v in a){var n=a[v];u[v]=i(n)?D({from:v},n):{from:n}}else 0}}function He(e){var l=e.directives;if(l)for(var a in l){var u=l[a];"function"===typeof u&&(l[a]={bind:u,update:u})}}function qe(e,l,a){if("function"===typeof l&&(l=l.options),Ve(l,a),Be(l,a),He(l),!l._base&&(l.extends&&(e=qe(e,l.extends,a)),l.mixins))for(var u=0,t=l.mixins.length;u<t;u++)e=qe(e,l.mixins[u],a);var v,n={};for(v in e)r(v);for(v in l)_(e,v)||r(v);function r(u){var t=Te[u]||Re;n[u]=t(e[u],l[u],a,u)}return n}function ze(e,l,a,u){if("string"===typeof a){var t=e[l];if(_(t,a))return t[a];var v=$(a);if(_(t,v))return t[v];var n=k(v);if(_(t,n))return t[n];var r=t[a]||t[v]||t[n];return r}}function We(e,l,a,u){var t=l[e],v=!_(a,e),n=a[e],r=Ye(Boolean,t.type);if(r>-1)if(v&&!_(t,"default"))n=!1;else if(""===n||n===j(e)){var b=Ye(String,t.type);(b<0||r<b)&&(n=!0)}if(void 0===n){n=Ge(u,t,e);var o=ke;xe(!0),Pe(n),xe(o)}return n}function Ge(e,l,a){if(_(l,"default")){var u=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof u&&"Function"!==Je(l.type)?u.call(e):u}}function Je(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Xe(e,l){return Je(e)===Je(l)}function Ye(e,l){if(!Array.isArray(l))return Xe(l,e)?0:-1;for(var a=0,u=l.length;a<u;a++)if(Xe(l[a],e))return a;return-1}function Ke(e,l,a){fe();try{if(l){var u=l;while(u=u.$parent){var t=u.$options.errorCaptured;if(t)for(var v=0;v<t.length;v++)try{var n=!1===t[v].call(u,e,l,a);if(n)return}catch(lt){Ze(lt,u,"errorCaptured hook")}}}Ze(e,l,a)}finally{pe()}}function Qe(e,l,a,u,t){var v;try{v=a?e.apply(l,a):e.call(l),v&&!v._isVue&&f(v)&&!v._handled&&(v.catch(function(e){return Ke(e,u,t+" (Promise/async)")}),v._handled=!0)}catch(lt){Ke(lt,u,t)}return v}function Ze(e,l,a){if(V.errorHandler)try{return V.errorHandler.call(null,e,l,a)}catch(lt){lt!==e&&el(lt,null,"config.errorHandler")}el(e,l,a)}function el(e,l,a){if(!X&&!Y||"undefined"===typeof console)throw e;console.error(e)}var ll,al=[],ul=!1;function tl(){ul=!1;var e=al.slice(0);al.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&ne(Promise)){var vl=Promise.resolve();ll=function(){vl.then(tl),le&&setTimeout(U)}}else if(Z||"undefined"===typeof MutationObserver||!ne(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ll="undefined"!==typeof setImmediate&&ne(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var nl=1,rl=new MutationObserver(tl),bl=document.createTextNode(String(nl));rl.observe(bl,{characterData:!0}),ll=function(){nl=(nl+1)%2,bl.data=String(nl)}}function ol(e,l){var a;if(al.push(function(){if(e)try{e.call(l)}catch(lt){Ke(lt,l,"nextTick")}else a&&a(l)}),ul||(ul=!0,ll()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var il=new re;function cl(e){sl(e,il),il.clear()}function sl(e,l){var a,u,t=Array.isArray(e);if(!(!t&&!b(e)||Object.isFrozen(e)||e instanceof de)){if(e.__ob__){var v=e.__ob__.dep.id;if(l.has(v))return;l.add(v)}if(t){a=e.length;while(a--)sl(e[a],l)}else{u=Object.keys(e),a=u.length;while(a--)sl(e[u[a]],l)}}}var fl=w(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var u="!"===e.charAt(0);return e=u?e.slice(1):e,{name:e,once:a,capture:u,passive:l}});function pl(e,l){function a(){var e=arguments,u=a.fns;if(!Array.isArray(u))return Qe(u,null,arguments,l,"v-on handler");for(var t=u.slice(),v=0;v<t.length;v++)Qe(t[v],null,e,l,"v-on handler")}return a.fns=e,a}function dl(e,l,a,t,n,r){var b,o,i,c;for(b in e)o=e[b],i=l[b],c=fl(b),u(o)||(u(i)?(u(o.fns)&&(o=e[b]=pl(o,r)),v(c.once)&&(o=e[b]=n(c.name,o,c.capture)),a(c.name,o,c.capture,c.passive,c.params)):o!==i&&(i.fns=o,e[b]=i));for(b in l)u(e[b])&&(c=fl(b),t(c.name,l[b],c.capture))}function hl(e,l,a){var v=l.options.props;if(!u(v)){var n={},r=e.attrs,b=e.props;if(t(r)||t(b))for(var o in v){var i=j(o);yl(n,b,o,i,!0)||yl(n,r,o,i,!1)}return n}}function yl(e,l,a,u,v){if(t(l)){if(_(l,a))return e[a]=l[a],v||delete l[a],!0;if(_(l,u))return e[a]=l[u],v||delete l[u],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function ml(e){return r(e)?[ge(e)]:Array.isArray(e)?wl(e):void 0}function _l(e){return t(e)&&t(e.text)&&n(e.isComment)}function wl(e,l){var a,n,b,o,i=[];for(a=0;a<e.length;a++)n=e[a],u(n)||"boolean"===typeof n||(b=i.length-1,o=i[b],Array.isArray(n)?n.length>0&&(n=wl(n,(l||"")+"_"+a),_l(n[0])&&_l(o)&&(i[b]=ge(o.text+n[0].text),n.shift()),i.push.apply(i,n)):r(n)?_l(o)?i[b]=ge(o.text+n):""!==n&&i.push(ge(n)):_l(n)&&_l(o)?i[b]=ge(o.text+n.text):(v(e._isVList)&&t(n.tag)&&u(n.key)&&t(l)&&(n.key="__vlist"+l+"_"+a+"__"),i.push(n)));return i}function Ol(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function $l(e){var l=kl(e.$options.inject,e);l&&(xe(!1),Object.keys(l).forEach(function(a){Ee(e,a,l[a])}),xe(!0))}function kl(e,l){if(e){for(var a=Object.create(null),u=be?Reflect.ownKeys(e):Object.keys(e),t=0;t<u.length;t++){var v=u[t];if("__ob__"!==v){var n=e[v].from,r=l;while(r){if(r._provided&&_(r._provided,n)){a[v]=r._provided[n];break}r=r.$parent}if(!r)if("default"in e[v]){var b=e[v].default;a[v]="function"===typeof b?b.call(l):b}else 0}}return a}}function xl(e,l){if(!e||!e.length)return{};for(var a={},u=0,t=e.length;u<t;u++){var v=e[u],n=v.data;if(n&&n.attrs&&n.attrs.slot&&delete n.attrs.slot,v.context!==l&&v.fnContext!==l||!n||null==n.slot)(a.default||(a.default=[])).push(v);else{var r=n.slot,b=a[r]||(a[r]=[]);"template"===v.tag?b.push.apply(b,v.children||[]):b.push(v)}}for(var o in a)a[o].every(jl)&&delete a[o];return a}function jl(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Al(e,l,u){var t,v=Object.keys(l).length>0,n=e?!!e.$stable:!v,r=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(n&&u&&u!==a&&r===u.$key&&!v&&!u.$hasNormal)return u;for(var b in t={},e)e[b]&&"$"!==b[0]&&(t[b]=Sl(l,b,e[b]))}else t={};for(var o in l)o in t||(t[o]=Pl(l,o));return e&&Object.isExtensible(e)&&(e._normalized=t),q(t,"$stable",n),q(t,"$key",r),q(t,"$hasNormal",v),t}function Sl(e,l,a){var u=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:ml(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:u,enumerable:!0,configurable:!0}),u}function Pl(e,l){return function(){return e[l]}}function El(e,l){var a,u,v,n,r;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),u=0,v=e.length;u<v;u++)a[u]=l(e[u],u);else if("number"===typeof e)for(a=new Array(e),u=0;u<e;u++)a[u]=l(u+1,u);else if(b(e))if(be&&e[Symbol.iterator]){a=[];var o=e[Symbol.iterator](),i=o.next();while(!i.done)a.push(l(i.value,a.length)),i=o.next()}else for(n=Object.keys(e),a=new Array(n.length),u=0,v=n.length;u<v;u++)r=n[u],a[u]=l(e[r],r,u);return t(a)||(a=[]),a._isVList=!0,a}function Dl(e,l,a,u){var t,v=this.$scopedSlots[e];v?(a=a||{},u&&(a=D(D({},u),a)),t=v(a)||l):t=this.$slots[e]||l;var n=a&&a.slot;return n?this.$createElement("template",{slot:n},t):t}function Cl(e){return ze(this.$options,"filters",e,!0)||I}function Ul(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Tl(e,l,a,u,t){var v=V.keyCodes[l]||a;return t&&u&&!V.keyCodes[l]?Ul(t,u):v?Ul(v,e):u?j(u)!==l:void 0}function Il(e,l,a,u,t){if(a)if(b(a)){var v;Array.isArray(a)&&(a=C(a));var n=function(n){if("class"===n||"style"===n||y(n))v=e;else{var r=e.attrs&&e.attrs.type;v=u||V.mustUseProp(l,r,n)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var b=$(n),o=j(n);if(!(b in v)&&!(o in v)&&(v[n]=a[n],t)){var i=e.on||(e.on={});i["update:"+n]=function(e){a[n]=e}}};for(var r in a)n(r)}else;return e}function Ml(e,l){var a=this._staticTrees||(this._staticTrees=[]),u=a[e];return u&&!l?u:(u=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Nl(u,"__static__"+e,!1),u)}function Ll(e,l,a){return Nl(e,"__once__"+l+(a?"_"+a:""),!0),e}function Nl(e,l,a){if(Array.isArray(e))for(var u=0;u<e.length;u++)e[u]&&"string"!==typeof e[u]&&Fl(e[u],l+"_"+u,a);else Fl(e,l,a)}function Fl(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Rl(e,l){if(l)if(i(l)){var a=e.on=e.on?D({},e.on):{};for(var u in l){var t=a[u],v=l[u];a[u]=t?[].concat(t,v):v}}else;return e}function Vl(e,l,a,u){l=l||{$stable:!a};for(var t=0;t<e.length;t++){var v=e[t];Array.isArray(v)?Vl(v,l,a):v&&(v.proxy&&(v.fn.proxy=!0),l[v.key]=v.fn)}return u&&(l.$key=u),l}function Bl(e,l){for(var a=0;a<l.length;a+=2){var u=l[a];"string"===typeof u&&u&&(e[l[a]]=l[a+1])}return e}function Hl(e,l){return"string"===typeof e?l+e:e}function ql(e){e._o=Ll,e._n=d,e._s=p,e._l=El,e._t=Dl,e._q=M,e._i=L,e._m=Ml,e._f=Cl,e._k=Tl,e._b=Il,e._v=ge,e._e=ye,e._u=Vl,e._g=Rl,e._d=Bl,e._p=Hl}function zl(e,l,u,t,n){var r,b=this,o=n.options;_(t,"_uid")?(r=Object.create(t),r._original=t):(r=t,t=t._original);var i=v(o._compiled),c=!i;this.data=e,this.props=l,this.children=u,this.parent=t,this.listeners=e.on||a,this.injections=kl(o.inject,t),this.slots=function(){return b.$slots||Al(e.scopedSlots,b.$slots=xl(u,t)),b.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Al(e.scopedSlots,this.slots())}}),i&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=Al(e.scopedSlots,this.$slots)),o._scopeId?this._c=function(e,l,a,u){var v=ta(r,e,l,a,u,c);return v&&!Array.isArray(v)&&(v.fnScopeId=o._scopeId,v.fnContext=t),v}:this._c=function(e,l,a,u){return ta(r,e,l,a,u,c)}}function Wl(e,l,u,v,n){var r=e.options,b={},o=r.props;if(t(o))for(var i in o)b[i]=We(i,o,l||a);else t(u.attrs)&&Jl(b,u.attrs),t(u.props)&&Jl(b,u.props);var c=new zl(u,b,n,v,e),s=r.render.call(null,c._c,c);if(s instanceof de)return Gl(s,u,c.parent,r,c);if(Array.isArray(s)){for(var f=ml(s)||[],p=new Array(f.length),d=0;d<f.length;d++)p[d]=Gl(f[d],u,c.parent,r,c);return p}}function Gl(e,l,a,u,t){var v=me(e);return v.fnContext=a,v.fnOptions=u,l.slot&&((v.data||(v.data={})).slot=l.slot),v}function Jl(e,l){for(var a in l)e[$(a)]=l[a]}ql(zl.prototype);var Xl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Xl.prepatch(a,a)}else{var u=e.componentInstance=Ql(e,$a);u.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,u=l.componentInstance=e.componentInstance;Aa(u,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Da(a,"mounted")),e.data.keepAlive&&(l._isMounted?Ha(a):Pa(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Ea(l,!0):l.$destroy())}},Yl=Object.keys(Xl);function Kl(e,l,a,n,r){if(!u(e)){var o=a.$options._base;if(b(e)&&(e=o.extend(e)),"function"===typeof e){var i;if(u(e.cid)&&(i=e,e=pa(i,o),void 0===e))return fa(i,l,a,n,r);l=l||{},su(e),t(l.model)&&la(e.options,l);var c=hl(l,e,r);if(v(e.options.functional))return Wl(e,c,l,a,n);var s=l.on;if(l.on=l.nativeOn,v(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Zl(l);var p=e.options.name||r,d=new de("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:c,listeners:s,tag:r,children:n},i);return d}}}function Ql(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},u=e.data.inlineTemplate;return t(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new e.componentOptions.Ctor(a)}function Zl(e){for(var l=e.hook||(e.hook={}),a=0;a<Yl.length;a++){var u=Yl[a],t=l[u],v=Xl[u];t===v||t&&t._merged||(l[u]=t?ea(v,t):v)}}function ea(e,l){var a=function(a,u){e(a,u),l(a,u)};return a._merged=!0,a}function la(e,l){var a=e.model&&e.model.prop||"value",u=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var v=l.on||(l.on={}),n=v[u],r=l.model.callback;t(n)?(Array.isArray(n)?-1===n.indexOf(r):n!==r)&&(v[u]=[r].concat(n)):v[u]=r}var aa=1,ua=2;function ta(e,l,a,u,t,n){return(Array.isArray(a)||r(a))&&(t=u,u=a,a=void 0),v(n)&&(t=ua),va(e,l,a,u,t)}function va(e,l,a,u,v){if(t(a)&&t(a.__ob__))return ye();if(t(a)&&t(a.is)&&(l=a.is),!l)return ye();var n,r,b;(Array.isArray(u)&&"function"===typeof u[0]&&(a=a||{},a.scopedSlots={default:u[0]},u.length=0),v===ua?u=ml(u):v===aa&&(u=gl(u)),"string"===typeof l)?(r=e.$vnode&&e.$vnode.ns||V.getTagNamespace(l),n=V.isReservedTag(l)?new de(V.parsePlatformTagName(l),a,u,void 0,void 0,e):a&&a.pre||!t(b=ze(e.$options,"components",l))?new de(l,a,u,void 0,void 0,e):Kl(b,a,e,u,l)):n=Kl(l,a,e,u);return Array.isArray(n)?n:t(n)?(t(r)&&na(n,r),t(a)&&ra(a),n):ye()}function na(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),t(e.children))for(var n=0,r=e.children.length;n<r;n++){var b=e.children[n];t(b.tag)&&(u(b.ns)||v(a)&&"svg"!==b.tag)&&na(b,l,a)}}function ra(e){b(e.style)&&cl(e.style),b(e.class)&&cl(e.class)}function ba(e){e._vnode=null,e._staticTrees=null;var l=e.$options,u=e.$vnode=l._parentVnode,t=u&&u.context;e.$slots=xl(l._renderChildren,t),e.$scopedSlots=a,e._c=function(l,a,u,t){return ta(e,l,a,u,t,!1)},e.$createElement=function(l,a,u,t){return ta(e,l,a,u,t,!0)};var v=u&&u.data;Ee(e,"$attrs",v&&v.attrs||a,null,!0),Ee(e,"$listeners",l._parentListeners||a,null,!0)}var oa,ia=null;function ca(e){ql(e.prototype),e.prototype.$nextTick=function(e){return ol(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,u=a.render,t=a._parentVnode;t&&(l.$scopedSlots=Al(t.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=t;try{ia=l,e=u.call(l._renderProxy,l.$createElement)}catch(lt){Ke(lt,l,"render"),e=l._vnode}finally{ia=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof de||(e=ye()),e.parent=t,e}}function sa(e,l){return(e.__esModule||be&&"Module"===e[Symbol.toStringTag])&&(e=e.default),b(e)?l.extend(e):e}function fa(e,l,a,u,t){var v=ye();return v.asyncFactory=e,v.asyncMeta={data:l,context:a,children:u,tag:t},v}function pa(e,l){if(v(e.error)&&t(e.errorComp))return e.errorComp;if(t(e.resolved))return e.resolved;var a=ia;if(a&&t(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),v(e.loading)&&t(e.loadingComp))return e.loadingComp;if(a&&!t(e.owners)){var n=e.owners=[a],r=!0,o=null,i=null;a.$on("hook:destroyed",function(){return g(n,a)});var c=function(e){for(var l=0,a=n.length;l<a;l++)n[l].$forceUpdate();e&&(n.length=0,null!==o&&(clearTimeout(o),o=null),null!==i&&(clearTimeout(i),i=null))},s=N(function(a){e.resolved=sa(a,l),r?n.length=0:c(!0)}),p=N(function(l){t(e.errorComp)&&(e.error=!0,c(!0))}),d=e(s,p);return b(d)&&(f(d)?u(e.resolved)&&d.then(s,p):f(d.component)&&(d.component.then(s,p),t(d.error)&&(e.errorComp=sa(d.error,l)),t(d.loading)&&(e.loadingComp=sa(d.loading,l),0===d.delay?e.loading=!0:o=setTimeout(function(){o=null,u(e.resolved)&&u(e.error)&&(e.loading=!0,c(!1))},d.delay||200)),t(d.timeout)&&(i=setTimeout(function(){i=null,u(e.resolved)&&p(null)},d.timeout)))),r=!1,e.loading?e.loadingComp:e.resolved}}function da(e){return e.isComment&&e.asyncFactory}function ha(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(t(a)&&(t(a.componentOptions)||da(a)))return a}}function ya(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&wa(e,l)}function ga(e,l){oa.$on(e,l)}function ma(e,l){oa.$off(e,l)}function _a(e,l){var a=oa;return function u(){var t=l.apply(null,arguments);null!==t&&a.$off(e,u)}}function wa(e,l,a){oa=e,dl(l,a||{},ga,ma,_a,e),oa=void 0}function Oa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var u=this;if(Array.isArray(e))for(var t=0,v=e.length;t<v;t++)u.$on(e[t],a);else(u._events[e]||(u._events[e]=[])).push(a),l.test(e)&&(u._hasHookEvent=!0);return u},e.prototype.$once=function(e,l){var a=this;function u(){a.$off(e,u),l.apply(a,arguments)}return u.fn=l,a.$on(e,u),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var u=0,t=e.length;u<t;u++)a.$off(e[u],l);return a}var v,n=a._events[e];if(!n)return a;if(!l)return a._events[e]=null,a;var r=n.length;while(r--)if(v=n[r],v===l||v.fn===l){n.splice(r,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?E(a):a;for(var u=E(arguments,1),t='event handler for "'+e+'"',v=0,n=a.length;v<n;v++)Qe(a[v],l,u,l,t)}return l}}var $a=null;function ka(e){var l=$a;return $a=e,function(){$a=l}}function xa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ja(e){e.prototype._update=function(e,l){var a=this,u=a.$el,t=a._vnode,v=ka(a);a._vnode=e,a.$el=t?a.__patch__(t,e):a.__patch__(a.$el,e,l,!1),v(),u&&(u.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Da(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||g(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Da(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Aa(e,l,u,t,v){var n=t.data.scopedSlots,r=e.$scopedSlots,b=!!(n&&!n.$stable||r!==a&&!r.$stable||n&&e.$scopedSlots.$key!==n.$key),o=!!(v||e.$options._renderChildren||b);if(e.$options._parentVnode=t,e.$vnode=t,e._vnode&&(e._vnode.parent=t),e.$options._renderChildren=v,e.$attrs=t.data.attrs||a,e.$listeners=u||a,l&&e.$options.props){xe(!1);for(var i=e._props,c=e.$options._propKeys||[],s=0;s<c.length;s++){var f=c[s],p=e.$options.props;i[f]=We(f,p,l,e)}xe(!0),e.$options.propsData=l}u=u||a;var d=e.$options._parentListeners;e.$options._parentListeners=u,wa(e,u,d),o&&(e.$slots=xl(v,t.context),e.$forceUpdate())}function Sa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Pa(e,l){if(l){if(e._directInactive=!1,Sa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Pa(e.$children[a]);Da(e,"activated")}}function Ea(e,l){if((!l||(e._directInactive=!0,!Sa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Ea(e.$children[a]);Da(e,"deactivated")}}function Da(e,l){fe();var a=e.$options[l],u=l+" hook";if(a)for(var t=0,v=a.length;t<v;t++)Qe(a[t],e,null,e,u);e._hasHookEvent&&e.$emit("hook:"+l),pe()}var Ca=[],Ua=[],Ta={},Ia=!1,Ma=!1,La=0;function Na(){La=Ca.length=Ua.length=0,Ta={},Ia=Ma=!1}var Fa=Date.now;if(X&&!Z){var Ra=window.performance;Ra&&"function"===typeof Ra.now&&Fa()>document.createEvent("Event").timeStamp&&(Fa=function(){return Ra.now()})}function Va(){var e,l;for(Fa(),Ma=!0,Ca.sort(function(e,l){return e.id-l.id}),La=0;La<Ca.length;La++)e=Ca[La],e.before&&e.before(),l=e.id,Ta[l]=null,e.run();var a=Ua.slice(),u=Ca.slice();Na(),qa(a),Ba(u),ve&&V.devtools&&ve.emit("flush")}function Ba(e){var l=e.length;while(l--){var a=e[l],u=a.vm;u._watcher===a&&u._isMounted&&!u._isDestroyed&&Da(u,"updated")}}function Ha(e){e._inactive=!1,Ua.push(e)}function qa(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Pa(e[l],!0)}function za(e){var l=e.id;if(null==Ta[l]){if(Ta[l]=!0,Ma){var a=Ca.length-1;while(a>La&&Ca[a].id>e.id)a--;Ca.splice(a+1,0,e)}else Ca.push(e);Ia||(Ia=!0,ol(Va))}}var Wa=0,Ga=function(e,l,a,u,t){this.vm=e,t&&(e._watcher=this),e._watchers.push(this),u?(this.deep=!!u.deep,this.user=!!u.user,this.lazy=!!u.lazy,this.sync=!!u.sync,this.before=u.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Wa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new re,this.newDepIds=new re,this.expression="","function"===typeof l?this.getter=l:(this.getter=W(l),this.getter||(this.getter=U)),this.value=this.lazy?void 0:this.get()};Ga.prototype.get=function(){var e;fe(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(lt){if(!this.user)throw lt;Ke(lt,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&cl(e),pe(),this.cleanupDeps()}return e},Ga.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Ga.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ga.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():za(this)},Ga.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||b(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(lt){Ke(lt,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Ga.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ga.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Ga.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ja={enumerable:!0,configurable:!0,get:U,set:U};function Xa(e,l,a){Ja.get=function(){return this[l][a]},Ja.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ja)}function Ya(e){e._watchers=[];var l=e.$options;l.props&&Ka(e,l.props),l.methods&&vu(e,l.methods),l.data?Qa(e):Pe(e._data={},!0),l.computed&&lu(e,l.computed),l.watch&&l.watch!==ae&&nu(e,l.watch)}function Ka(e,l){var a=e.$options.propsData||{},u=e._props={},t=e.$options._propKeys=[],v=!e.$parent;v||xe(!1);var n=function(v){t.push(v);var n=We(v,l,a,e);Ee(u,v,n),v in e||Xa(e,"_props",v)};for(var r in l)n(r);xe(!0)}function Qa(e){var l=e.$options.data;l=e._data="function"===typeof l?Za(l,e):l||{},i(l)||(l={});var a=Object.keys(l),u=e.$options.props,t=(e.$options.methods,a.length);while(t--){var v=a[t];0,u&&_(u,v)||H(v)||Xa(e,"_data",v)}Pe(l,!0)}function Za(e,l){fe();try{return e.call(l,l)}catch(lt){return Ke(lt,l,"data()"),{}}finally{pe()}}var eu={lazy:!0};function lu(e,l){var a=e._computedWatchers=Object.create(null),u=te();for(var t in l){var v=l[t],n="function"===typeof v?v:v.get;0,u||(a[t]=new Ga(e,n||U,U,eu)),t in e||au(e,t,v)}}function au(e,l,a){var u=!te();"function"===typeof a?(Ja.get=u?uu(l):tu(a),Ja.set=U):(Ja.get=a.get?u&&!1!==a.cache?uu(l):tu(a.get):U,Ja.set=a.set||U),Object.defineProperty(e,l,Ja)}function uu(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),ce.target&&l.depend(),l.value}}function tu(e){return function(){return e.call(this,this)}}function vu(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?U:P(l[a],e)}function nu(e,l){for(var a in l){var u=l[a];if(Array.isArray(u))for(var t=0;t<u.length;t++)ru(e,a,u[t]);else ru(e,a,u)}}function ru(e,l,a,u){return i(a)&&(u=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,u)}function bu(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=De,e.prototype.$delete=Ce,e.prototype.$watch=function(e,l,a){var u=this;if(i(l))return ru(u,e,l,a);a=a||{},a.user=!0;var t=new Ga(u,e,l,a);if(a.immediate)try{l.call(u,t.value)}catch(v){Ke(v,u,'callback for immediate watcher "'+t.expression+'"')}return function(){t.teardown()}}}var ou=0;function iu(e){e.prototype._init=function(e){var l=this;l._uid=ou++,l._isVue=!0,e&&e._isComponent?cu(l,e):l.$options=qe(su(l.constructor),e||{},l),l._renderProxy=l,l._self=l,xa(l),ya(l),ba(l),Da(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&$l(l),Ya(l),"mp-toutiao"!==l.mpHost&&Ol(l),"mp-toutiao"!==l.mpHost&&Da(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function cu(e,l){var a=e.$options=Object.create(e.constructor.options),u=l._parentVnode;a.parent=l.parent,a._parentVnode=u;var t=u.componentOptions;a.propsData=t.propsData,a._parentListeners=t.listeners,a._renderChildren=t.children,a._componentTag=t.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function su(e){var l=e.options;if(e.super){var a=su(e.super),u=e.superOptions;if(a!==u){e.superOptions=a;var t=fu(e);t&&D(e.extendOptions,t),l=e.options=qe(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function fu(e){var l,a=e.options,u=e.sealedOptions;for(var t in a)a[t]!==u[t]&&(l||(l={}),l[t]=a[t]);return l}function pu(e){this._init(e)}function du(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function hu(e){e.mixin=function(e){return this.options=qe(this.options,e),this}}function yu(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,u=a.cid,t=e._Ctor||(e._Ctor={});if(t[u])return t[u];var v=e.name||a.options.name;var n=function(e){this._init(e)};return n.prototype=Object.create(a.prototype),n.prototype.constructor=n,n.cid=l++,n.options=qe(a.options,e),n["super"]=a,n.options.props&&gu(n),n.options.computed&&mu(n),n.extend=a.extend,n.mixin=a.mixin,n.use=a.use,F.forEach(function(e){n[e]=a[e]}),v&&(n.options.components[v]=n),n.superOptions=a.options,n.extendOptions=e,n.sealedOptions=D({},n.options),t[u]=n,n}}function gu(e){var l=e.options.props;for(var a in l)Xa(e.prototype,"_props",a)}function mu(e){var l=e.options.computed;for(var a in l)au(e.prototype,a,l[a])}function _u(e){F.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&i(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function wu(e){return e&&(e.Ctor.options.name||e.tag)}function Ou(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!c(e)&&e.test(l)}function $u(e,l){var a=e.cache,u=e.keys,t=e._vnode;for(var v in a){var n=a[v];if(n){var r=wu(n.componentOptions);r&&!l(r)&&ku(a,v,u,t)}}}function ku(e,l,a,u){var t=e[l];!t||u&&t.tag===u.tag||t.componentInstance.$destroy(),e[l]=null,g(a,l)}iu(pu),bu(pu),Oa(pu),ja(pu),ca(pu);var xu=[String,RegExp,Array],ju={name:"keep-alive",abstract:!0,props:{include:xu,exclude:xu,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ku(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){$u(e,function(e){return Ou(l,e)})}),this.$watch("exclude",function(l){$u(e,function(e){return!Ou(l,e)})})},render:function(){var e=this.$slots.default,l=ha(e),a=l&&l.componentOptions;if(a){var u=wu(a),t=this,v=t.include,n=t.exclude;if(v&&(!u||!Ou(v,u))||n&&u&&Ou(n,u))return l;var r=this,b=r.cache,o=r.keys,i=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;b[i]?(l.componentInstance=b[i].componentInstance,g(o,i),o.push(i)):(b[i]=l,o.push(i),this.max&&o.length>parseInt(this.max)&&ku(b,o[0],o,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},Au={KeepAlive:ju};function Su(e){var l={get:function(){return V}};Object.defineProperty(e,"config",l),e.util={warn:oe,extend:D,mergeOptions:qe,defineReactive:Ee},e.set=De,e.delete=Ce,e.nextTick=ol,e.observable=function(e){return Pe(e),e},e.options=Object.create(null),F.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,D(e.options.components,Au),du(e),hu(e),yu(e),_u(e)}Su(pu),Object.defineProperty(pu.prototype,"$isServer",{get:te}),Object.defineProperty(pu.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(pu,"FunctionalRenderContext",{value:zl}),pu.version="2.6.10";var Pu="[object Array]",Eu="[object Object]";function Du(e,l){var a={};return Cu(e,l),Uu(e,l,"",a),a}function Cu(e,l){if(e!==l){var a=Iu(e),u=Iu(l);if(a==Eu&&u==Eu){if(Object.keys(e).length>=Object.keys(l).length)for(var t in l){var v=e[t];void 0===v?e[t]=null:Cu(v,l[t])}}else a==Pu&&u==Pu&&e.length>=l.length&&l.forEach(function(l,a){Cu(e[a],l)})}}function Uu(e,l,a,u){if(e!==l){var t=Iu(e),v=Iu(l);if(t==Eu)if(v!=Eu||Object.keys(e).length<Object.keys(l).length)Tu(u,a,e);else{var n=function(t){var v=e[t],n=l[t],r=Iu(v),b=Iu(n);if(r!=Pu&&r!=Eu)v!=l[t]&&Tu(u,(""==a?"":a+".")+t,v);else if(r==Pu)b!=Pu?Tu(u,(""==a?"":a+".")+t,v):v.length<n.length?Tu(u,(""==a?"":a+".")+t,v):v.forEach(function(e,l){Uu(e,n[l],(""==a?"":a+".")+t+"["+l+"]",u)});else if(r==Eu)if(b!=Eu||Object.keys(v).length<Object.keys(n).length)Tu(u,(""==a?"":a+".")+t,v);else for(var o in v)Uu(v[o],n[o],(""==a?"":a+".")+t+"."+o,u)};for(var r in e)n(r)}else t==Pu?v!=Pu?Tu(u,a,e):e.length<l.length?Tu(u,a,e):e.forEach(function(e,t){Uu(e,l[t],a+"["+t+"]",u)}):Tu(u,a,e)}}function Tu(e,l,a){e[l]=a}function Iu(e){return Object.prototype.toString.call(e)}function Mu(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var u=0;u<a.length;u++)a[u]()}}function Lu(e){return Ca.find(function(l){return e._watcher===l})}function Nu(e,l){if(!e.__next_tick_pending&&!Lu(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return ol(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var u=e.$scope;console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+e._uid+"]:nextMPTick")}var t;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(lt){Ke(lt,e,"nextTick")}else t&&t(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){t=e})}function Fu(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Ru=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var u=this.$scope,t=Object.create(null);try{t=Fu(this)}catch(r){console.error(r)}t.__webviewId__=u.data.__webviewId__;var v=Object.create(null);Object.keys(t).forEach(function(e){v[e]=u.data[e]});var n=Du(t,v);Object.keys(n).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+this._uid+"]差量更新",JSON.stringify(n)),this.__next_tick_pending=!0,u.setData(n,function(){a.__next_tick_pending=!1,Mu(a)})):Mu(this)}};function Vu(){}function Bu(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Vu),e.$options.render||(e.$options.render=Vu),"mp-toutiao"!==e.mpHost&&Da(e,"beforeMount");var u=function(){e._update(e._render(),a)};return new Ga(e,u,U,{before:function(){e._isMounted&&!e._isDestroyed&&Da(e,"beforeUpdate")}},!0),a=!1,e}function Hu(e,l){return t(e)||t(l)?qu(e,zu(l)):""}function qu(e,l){return e?l?e+" "+l:e:l||""}function zu(e){return Array.isArray(e)?Wu(e):b(e)?Gu(e):"string"===typeof e?e:""}function Wu(e){for(var l,a="",u=0,v=e.length;u<v;u++)t(l=zu(e[u]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Gu(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Ju=w(function(e){var l={},a=/;(?![^(]*\))/g,u=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(u);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Xu(e){return Array.isArray(e)?C(e):"string"===typeof e?Ju(e):e}var Yu=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Ku(e,l){var a=l.split("."),u=a[0];return 0===u.indexOf("__$n")&&(u=parseInt(u.replace("__$n",""))),1===a.length?e[u]:Ku(e[u],a.slice(1).join("."))}function Qu(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:E(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Nu(this,e)},Yu.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=Ol,e.prototype.__init_injections=$l,e.prototype.__call_hook=function(e,l){var a=this;fe();var u,t=a.$options[e],v=e+" hook";if(t)for(var n=0,r=t.length;n<r;n++)u=Qe(t[n],a,l?[l]:null,a,v);return a._hasHookEvent&&a.$emit("hook:"+e),pe(),u},e.prototype.__set_model=function(e,l,a,u){Array.isArray(u)&&(-1!==u.indexOf("trim")&&(a=a.trim()),-1!==u.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return i(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Ku(l||this,e)},e.prototype.__get_class=function(e,l){return Hu(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Xu(e),u=l?D(l,a):a;return Object.keys(u).map(function(e){return j(e)+":"+u[e]}).join(";")},e.prototype.__map=function(e,l){var a,u,t,v,n;if(Array.isArray(e)){for(a=new Array(e.length),u=0,t=e.length;u<t;u++)a[u]=l(e[u],u);return a}if(b(e)){for(v=Object.keys(e),a=Object.create(null),u=0,t=v.length;u<t;u++)n=v[u],a[n]=l(e[n],n,u);return a}return[]}}var Zu=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function et(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Zu.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,u=a.created;Zu.forEach(function(e){a[e]=u}),e.prototype.__lifecycle_hooks__=Zu}pu.prototype.__patch__=Ru,pu.prototype.$mount=function(e,l){return Bu(this,e,l)},et(pu),Qu(pu),l["default"]=pu}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createComponent=kl,l.createPage=$l,l.default=void 0;var u=t(a("66fd"));function t(e){return e&&e.__esModule?e:{default:e}}function v(e,l){return b(e)||r(e,l)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,l){var a=[],u=!0,t=!1,v=void 0;try{for(var n,r=e[Symbol.iterator]();!(u=(n=r.next()).done);u=!0)if(a.push(n.value),l&&a.length===l)break}catch(b){t=!0,v=b}finally{try{u||null==r["return"]||r["return"]()}finally{if(t)throw v}}return a}function b(e){if(Array.isArray(e))return e}function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function i(e){return f(e)||s(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function h(e){return"function"===typeof e}function y(e){return"string"===typeof e}function g(e){return"[object Object]"===p.call(e)}function m(e,l){return d.call(e,l)}function _(){}function w(e){var l=Object.create(null);return function(a){var u=l[a];return u||(l[a]=e(a))}}var O=/-(\w)/g,$=w(function(e){return e.replace(O,function(e,l){return l?l.toUpperCase():""})}),k=["invoke","success","fail","complete","returnValue"],x={},j={};function A(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?S(a):a}function S(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function P(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function E(e,l){Object.keys(l).forEach(function(a){-1!==k.indexOf(a)&&h(l[a])&&(e[a]=A(e[a],l[a]))})}function D(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==k.indexOf(a)&&h(l[a])&&P(e[a],l[a])})}function C(e,l){"string"===typeof e&&g(l)?E(j[e]||(j[e]={}),l):g(e)&&E(x,e)}function U(e,l){"string"===typeof e?g(l)?D(j[e],l):delete j[e]:g(e)&&D(x,e)}function T(e){return function(l){return e(l)||l}}function I(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function M(e,l){for(var a=!1,u=0;u<e.length;u++){var t=e[u];if(a)a=Promise.then(T(t));else{var v=t(l);if(I(v)&&(a=Promise.resolve(v)),!1===v)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function L(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var u=l[a];l[a]=function(l){M(e[a],l).then(function(e){return h(u)&&u(e)||e})}}}),l}function N(e,l){var a=[];Array.isArray(x.returnValue)&&a.push.apply(a,i(x.returnValue));var u=j[e];return u&&Array.isArray(u.returnValue)&&a.push.apply(a,i(u.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function F(e){var l=Object.create(null);Object.keys(x).forEach(function(e){"returnValue"!==e&&(l[e]=x[e].slice())});var a=j[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function R(e,l,a){for(var u=arguments.length,t=new Array(u>3?u-3:0),v=3;v<u;v++)t[v-3]=arguments[v];var n=F(e);if(n&&Object.keys(n).length){if(Array.isArray(n.invoke)){var r=M(n.invoke,a);return r.then(function(e){return l.apply(void 0,[L(n,e)].concat(t))})}return l.apply(void 0,[L(n,a)].concat(t))}return l.apply(void 0,[a].concat(t))}var V={returnValue:function(e){return I(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},B=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,q=/^on/;function z(e){return H.test(e)}function W(e){return B.test(e)}function G(e){return q.test(e)}function J(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function X(e){return!(z(e)||W(e)||G(e))}function Y(e,l){return X(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length,t=new Array(u>1?u-1:0),v=1;v<u;v++)t[v-1]=arguments[v];return h(a.success)||h(a.fail)||h(a.complete)?N(e,R.apply(void 0,[e,l,a].concat(t))):N(e,J(new Promise(function(u,v){R.apply(void 0,[e,l,Object.assign({},a,{success:u,fail:v})].concat(t)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var K=1e-4,Q=750,Z=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,u=e.windowWidth;ee=u,le=a,Z="ios"===l}function ue(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Q*(l||ee);return a<0&&(a=-a),a=Math.floor(a+K),0===a?1!==le&&Z?.5:1:e<0?-a:a}var te={promiseInterceptor:V},ve=Object.freeze({upx2px:ue,interceptors:te,addInterceptor:C,removeInterceptor:U}),ne={},re=[],be=[],oe=["success","fail","cancel","complete"];function ie(e,l,a){return function(u){return l(se(e,u,a))}}function ce(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(l)){var v=!0===t?l:{};for(var n in h(a)&&(a=a(l,v)||{}),l)if(m(a,n)){var r=a[n];h(r)&&(r=r(l[n],l,v)),r?y(r)?v[r]=l[n]:g(r)&&(v[r.name?r.name:n]=r.value):console.warn("app-plus ".concat(e,"暂不支持").concat(n))}else-1!==oe.indexOf(n)?v[n]=ie(e,l[n],u):t||(v[n]=l[n]);return v}return h(l)&&(l=ie(e,l,u)),l}function se(e,l,a){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(ne.returnValue)&&(l=ne.returnValue(e,l)),ce(e,l,a,{},u)}function fe(e,l){if(m(ne,e)){var a=ne[e];return a?function(l,u){var t=a;h(a)&&(t=a(l)),l=ce(e,l,t.args,t.returnValue);var v=[l];"undefined"!==typeof u&&v.push(u);var n=wx[t.name||e].apply(wx,v);return W(e)?se(e,n,t.returnValue,z(e)):n}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),de=["subscribePush","unsubscribePush","onPush","offPush","share"];function he(e){return function(l){var a=l.fail,u=l.complete,t={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};h(a)&&a(t),h(u)&&u(t)}}de.forEach(function(e){pe[e]=he(e)});var ye=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new u.default),e};var e}();function ge(e,l,a){return e[l].apply(e,a)}function me(){return ge(ye(),"$on",Array.prototype.slice.call(arguments))}function _e(){return ge(ye(),"$off",Array.prototype.slice.call(arguments))}function we(){return ge(ye(),"$once",Array.prototype.slice.call(arguments))}function Oe(){return ge(ye(),"$emit",Array.prototype.slice.call(arguments))}var $e=Object.freeze({$on:me,$off:_e,$once:we,$emit:Oe});function ke(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,u=plus.webview.getWebviewById(e.__uniapp_mask_id);u=u.parent()||u;var t=e.show,v=e.hide,n=e.close,r=function(){u.setStyle({mask:a})},b=function(){u.setStyle({mask:"none"})};e.show=function(){r();for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return t.apply(e,a)},e.hide=function(){b();for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return v.apply(e,a)},e.close=function(){b(),l=[];for(var a=arguments.length,u=new Array(a),t=0;t<a;t++)u[t]=arguments[t];return n.apply(e,u)}}}function xe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&ke(l),l}function je(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var Ae=Object.freeze({requireNativePlugin:je,getSubNVueById:xe}),Se=Page,Pe=Component,Ee=/:/g,De=w(function(e){return $(e.replace(Ee,"-"))});function Ce(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var u=arguments.length,t=new Array(u>1?u-1:0),v=1;v<u;v++)t[v-1]=arguments[v];return l.apply(e,[De(a)].concat(t))}}}function Ue(e,l){var a=l[e];l[e]=a?function(){Ce(this);for(var e=arguments.length,l=new Array(e),u=0;u<e;u++)l[u]=arguments[u];return a.apply(this,l)}:function(){Ce(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ue("onLoad",e),Se(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ue("created",e),Pe(e)};var Te=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ie(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){m(a,l)&&(e[l]=a[l])})}function Me(e,l){if(!l)return!0;if(u.default.options&&Array.isArray(u.default.options[e]))return!0;if(l=l.default||l,h(l))return!!h(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(h(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Me(e,l)}):void 0}function Le(e,l,a){l.forEach(function(l){Me(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Ne(e,l){var a;return l=l.default||l,h(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Fe(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Re(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Ve(e,l){var a=e.data||{},u=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(t){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(t){}return g(a)||(a={}),Object.keys(u).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||m(a,e)||(a[e]=u[e])}),a}var Be=[String,Number,Boolean,Object,Array,null];function He(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function qe(e,l){var a=e["behaviors"],u=e["extends"],t=e["mixins"],v=e["props"];v||(e["props"]=v=[]);var n=[];return Array.isArray(a)&&a.forEach(function(e){n.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(v)?(v.push("name"),v.push("value")):(v["name"]={type:String,default:""},v["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(u)&&u.props&&n.push(l({properties:We(u.props,!0)})),Array.isArray(t)&&t.forEach(function(e){g(e)&&e.props&&n.push(l({properties:We(e.props,!0)}))}),n}function ze(e,l,a,u){return Array.isArray(l)&&1===l.length?l[0]:l}function We(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:He(e)}}):g(e)&&Object.keys(e).forEach(function(l){var u=e[l];if(g(u)){var t=u["default"];h(t)&&(t=t()),u.type=ze(l,u.type),a[l]={type:-1!==Be.indexOf(u.type)?u.type:null,value:t,observer:He(l)}}else{var v=ze(l,u);a[l]={type:-1!==Be.indexOf(v)?v:null,observer:He(l)}}}),a}function Ge(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=_,e.preventDefault=_,e.target=e.target||{},m(e,"detail")||(e.detail={}),g(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Je(e,l){var a=e;return l.forEach(function(l){var u=l[0],t=l[2];if(u||"undefined"!==typeof t){var v=l[1],n=l[3],r=u?e.__get_value(u,a):a;Number.isInteger(r)?a=t:v?Array.isArray(r)?a=r.find(function(l){return e.__get_value(v,l)===t}):g(r)?a=Object.keys(r).find(function(l){return e.__get_value(v,r[l])===t}):console.error("v-for 暂不支持循环数据：",r):a=r[t],n&&(a=e.__get_value(n,a))}}),a}function Xe(e,l,a){var u={};return Array.isArray(l)&&l.length&&l.forEach(function(l,t){"string"===typeof l?l?"$event"===l?u["$"+t]=a:0===l.indexOf("$event.")?u["$"+t]=e.__get_value(l.replace("$event.",""),a):u["$"+t]=e.__get_value(l):u["$"+t]=e:u["$"+t]=Je(e,l)}),u}function Ye(e){for(var l={},a=1;a<e.length;a++){var u=e[a];l[u[0]]=u[1]}return l}function Ke(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],t=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,n=!1;if(t&&(n=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return n?[l]:l.detail.__args__||l.detail;var r=Xe(e,u,l),b=[];return a.forEach(function(e){"$event"===e?"__set_model"!==v||t?t&&!n?b.push(l.detail.__args__[0]):b.push(l):b.push(l.target.value):Array.isArray(e)&&"o"===e[0]?b.push(Ye(e)):"string"===typeof e&&m(r,e)?b.push(r[e]):b.push(e)}),b}var Qe="~",Ze="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Ge(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var u=a.eventOpts||a["event-opts"];if(!u)return console.warn("事件信息不存在");var t=e.type,v=[];return u.forEach(function(a){var u=a[0],n=a[1],r=u.charAt(0)===Ze;u=r?u.slice(1):u;var b=u.charAt(0)===Qe;u=b?u.slice(1):u,n&&el(t,u)&&n.forEach(function(a){var u=a[0];if(u){var t=l.$vm;t.$options.generic&&t.$parent&&t.$parent.$parent&&(t=t.$parent.$parent);var n=t[u];if(!h(n))throw new Error(" _vm.".concat(u," is not a function"));if(b){if(n.once)return;n.once=!0}v.push(n.apply(t,Ke(l.$vm,e,a[1],a[2],r,u)))}})}),"input"===t&&1===v.length&&"undefined"!==typeof v[0]?v[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function ul(e,l){var a=l.mocks,t=l.initRefs;u.default.prototype.mpHost="app-plus",u.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(t(this),Ie(this,a)))}});var v={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return v.globalData=e.$options.globalData||{},Le(v,al),v}var tl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function vl(e,l){var a=e.$children,u=a.find(function(e){return e.$scope._$vueId===l});if(u)return u;for(var t=a.length-1;t>=0;t--)if(u=vl(a[t],l),u)return u}function nl(e){return Behavior(e)}function rl(){return!!this.route}function bl(e){this.triggerEvent("__l",e)}function ol(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var u=l.selectAllComponents(".vue-ref-in-for");return u.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function il(e){var l,a=e.detail||e.value,u=a.vuePid,t=a.vueOptions;u&&(l=vl(this.$vm,u)),l||(l=this.$vm),t.parent=l}function cl(e){return ul(e,{mocks:tl,initRefs:ol})}var sl=["onUniNViewMessage"];function fl(e){var l=cl(e);return Le(l,sl),l}function pl(e){return App(fl(e)),e}function dl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,t=l.initRelation,n=Ne(u.default,e),r=v(n,2),b=r[0],o=r[1],i={options:{multipleSlots:!0,addGlobalClass:!0},data:Ve(o,u.default.prototype),behaviors:qe(o,nl),properties:We(o.props,!1,o.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Re(e.vueId,this),t.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new b(l),Fe(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:il,__e:ll}};return a?i:[i,b]}function hl(e){return dl(e,{isPage:rl,initRelation:bl})}function yl(e){var l=hl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var gl=["onShow","onHide","onUnload"];function ml(e,l){l.isPage,l.initRelation;var a=yl(e);return Le(a.methods,gl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function _l(e){return ml(e,{isPage:rl,initRelation:bl})}gl.push.apply(gl,Te);var wl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ol(e){var l=_l(e);return Le(l.methods,wl),l}function $l(e){return Component(Ol(e))}function kl(e){return Component(yl(e))}re.forEach(function(e){ne[e]=!1}),be.forEach(function(e){var l=ne[e]&&ne[e].name?ne[e].name:e;wx.canIUse(l)||(ne[e]=!1)});var xl={};Object.keys(ve).forEach(function(e){xl[e]=ve[e]}),Object.keys($e).forEach(function(e){xl[e]=$e[e]}),Object.keys(Ae).forEach(function(e){xl[e]=Y(e,Ae[e])}),Object.keys(wx).forEach(function(e){(m(wx,e)||m(ne,e))&&(xl[e]=Y(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=xl,e.UniEmitter=$e),wx.createApp=pl,wx.createPage=$l,wx.createComponent=kl;var jl=xl,Al=jl;l.default=Al}).call(this,a("c8ba"))},"777f":function(e,l,a){"use strict";var u=t(a("6484"));function t(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};u.get||u.set?Object.defineProperty(l,a,u):l[a]=e[a]}return l.default=e,l}var v="v2.3.5",n="https://api.activity.haoyousheng.com.cn/api/",r="http://api.shop.rp.surex.cc/v1/",b="https://api-t.hys-express.surex.cc/v1/",o="https://img.shop.haoyousheng.com.cn/wechat_icons",i="https://img.shop.haoyousheng.com.cn/",c=["x-ca-timestamp","x-ca-key","x-ca-nonce","x-ca-stage"].sort(),s={accept:"application/json","content-type":"application/json","x-application":"goodBuy","x-platform":"wx","x-useragent":"host","x-ver":v,"x-ca-timestamp":parseInt((new Date).getTime()/1e3),"x-ca-key":"24814519","x-ca-nonce":u.uuid(),"x-ca-stage":"RELEASE","x-scene":"1001","x-page":"pages/index/index{}","x-ca-signature-headers":c.join(",")};e.exports={Url:r,header:s,iconURL:o,shopImg:i,activeUrl:n,ExpUrl:b}},8784:function(e,l,a){"use strict";(function(e){a("b324");var l=o(a("66fd")),u=o(a("70a6")),t=o(a("431f")),v=o(a("777f")),n=b(a("e76f")),r=b(a("6484"));function b(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};u.get||u.set?Object.defineProperty(l,a,u):l[a]=e[a]}return l.default=e,l}function o(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){c(e,l,a[l])})}return e}function c(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}l.default.config.productionTip=!1,l.default.prototype.$http=t.default,l.default.prototype.$URL=v.default,l.default.prototype.$tool=r,l.default.prototype.$common=n,u.default.mpType="app";var s=new l.default(i({},u.default));e(s).$mount()}).call(this,a("6e42")["createApp"])},"8c65":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=t(a("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function v(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){c(e,l,a[l])})}return e}function n(e,l,a,u,t,v,n){try{var r=e[v](n),b=r.value}catch(o){return void a(o)}r.done?l(b):Promise.resolve(b).then(u,t)}function r(e){return function(){var l=this,a=arguments;return new Promise(function(u,t){var v=e.apply(l,a);function r(e){n(v,u,t,r,b,"next",e)}function b(e){n(v,u,t,r,b,"throw",e)}r(void 0)})}}function b(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function o(e,l){for(var a=0;a<l.length;a++){var u=l[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function i(e,l,a){return l&&o(e.prototype,l),a&&o(e,a),e}function c(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var s=function(){function l(){var e=this;b(this,l),c(this,"config",{baseUrl:"",header:{"content-type":"application/x-www-form-urlencoded"},method:"GET",dataType:"json",responseType:"text"}),c(this,"interceptor",{request:function(l){l&&(e.requestBeforeFun=l)},response:function(l,a){l&&a&&(e.requestComFun=l,e.requestComFail=a)}})}return i(l,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var a=r(u.default.mark(function a(){var t,n=this,r=arguments;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},t.baseUrl=this.config.baseUrl,t.dataType=t.dataType||this.config.dataType,t.responseType=t.responseType||this.config.responseType,t.url=t.url||"",t.data=t.data||{},t.params=t.params||{},t.header=t.header||this.config.header,t.method=t.method||this.config.method,a.abrupt("return",new Promise(function(a,u){var r=!0,b={};t.complete=function(e){e.config=b,n.validateStatus(e.statusCode)?(e=n.requestComFun(e),a(e)):(e=n.requestComFail(e),u(e))};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a={errMsg:e,config:l};u(a),r=!1};b=v({},n.requestBeforeFun(t,o));var i=v({},b);if(r){var c=l.posUrl(t.url)?t.url:t.baseUrl+t.url;if("{}"!==JSON.stringify(t.params)){var s=l.addQueryString(t.params);c+=-1===c.indexOf("?")?"?".concat(s):"&".concat(s)}i.url=c,i.header.token||delete i.header["token"],e.request(i)}}));case 10:case"end":return a.stop()}},a,this)}));function t(){return a.apply(this,arguments)}return t}()},{key:"get",value:function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(v({url:e,method:"GET"},l))}},{key:"post",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(v({url:e,data:l,method:"POST"},a))}},{key:"put",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(v({url:e,data:l,method:"PUT"},a))}},{key:"delete",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(v({url:e,data:l,method:"DELETE"},a))}},{key:"connect",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(v({url:e,data:l,method:"CONNECT"},a))}},{key:"head",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(v({url:e,data:l,method:"HEAD"},a))}},{key:"options",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(v({url:e,data:l,method:"OPTIONS"},a))}},{key:"trace",value:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(v({url:e,data:l,method:"TRACE"},a))}},{key:"upload",value:function(a,u){var t=this,n=u.files,r=u.filePath,b=u.name,o=u.header,i=u.formData;return new Promise(function(u,c){var s=!0,f={},p={baseUrl:t.config.baseUrl,url:a,files:n,filePath:r,method:"UPLOAD",name:b,header:o||t.config.header,formData:i,complete:function(e){e.config=f,200===e.statusCode?(e=t.requestComFun(e),u(e)):(e=t.requestComFail(e),c(e))}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,a={errMsg:e,config:l};c(a),s=!1};f=v({},t.requestBeforeFun(p,d));var h=v({},f);s&&(h.url=l.posUrl(a)?a:t.config.baseUrl+a,e.uploadFile(h))})}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var l="";return Object.keys(e).forEach(function(a){l+=a+"="+e[a]+"&"}),l.substring(0,l.length-1)}}]),l}();l.default=s}).call(this,a("6e42")["default"])},9218:function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("5cec"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},"92e0":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=function(e){return e<10?"0"+e:e+""},t={date:{init:function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date",t=arguments.length>3?arguments[3]:void 0,v=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,b=new Date,o=[],i=new Date(e.toString()),c=new Date(l.toString());e>l&&(i=new Date(l.toString()),c=new Date(e.toString()));for(var s=i.getFullYear(),f=(i.getMonth(),c.getFullYear()),p=[],d=[],h=[],y=[],g=[],m=[],_=[],w=[],O=n?1*v[1]:v[1]+1,$=b.getFullYear(),k=b.getMonth()+1,x=b.getDate(),j=new Date(s,O,0).getDate(),A=s;A<=f;A++)p.push(A+"");var S=p[v[0]];switch(a){case"half":case"date":case"yearMonth":if(r&&S==$){for(var P=1;P<=k;P++)d.push(u(P));for(var E=1;E<=x;E++)h.push(u(E))}else{for(var D=1;D<=12;D++)d.push(u(D));for(var C=1;C<=j;C++)h.push(u(C))}break;default:for(var U=1;U<=12;U++)d.push(u(U));for(var T=1;T<=j;T++)h.push(u(T));break}for(var I=0;I<24;I++)y.push(u(I));for(var M=0;M<60;M+=1*t)g.push(u(M));for(var L=0;L<60;L++)m.push(u(L));switch(n&&(w=[p.indexOf(v[0]),d.indexOf(v[1]),h.indexOf(v[2]),y.indexOf(v[3]),-1==g.indexOf(v[4])?0:g.indexOf(v[4]),m.indexOf(v[5])]),a){case"range":return n?(o=[w[0],w[1],w[2],0,w[0],w[1],w[2]],{years:p,months:d,days:h,defaultVal:o}):{years:p,months:d,days:h};case"date":return n?(o=[w[0],w[1],w[2]],{years:p,months:d,days:h,defaultVal:o}):{years:p,months:d,days:h};case"half":return _=[{label:"上午",value:0},{label:"下午",value:1}],n?(o=[w[0],w[1],w[2],w[3]],{years:p,months:d,days:h,areas:_,defaultVal:o}):{years:p,months:d,days:h,areas:_};case"yearMonth":return n?(o=[w[0],w[1]],{years:p,months:d,defaultVal:o}):{years:p,months:d};case"dateTime":return n?(o=w,{years:p,months:d,days:h,hours:y,minutes:g,seconds:m,defaultVal:o}):{years:p,months:d,days:h,hours:y,minutes:g,seconds:m};case"time":return n?(o=[w[3],w[4],w[5]],{hours:y,minutes:g,seconds:m,defaultVal:o}):{hours:y,minutes:g,seconds:m}}},initMonths:function(e,l){var a=new Date,t=a.getFullYear(),v=a.getMonth()+1,n=(a.getDate(),t==e),r=[];if(n&&l)for(var b=1;b<=v;b++)r.push(u(b));else for(var o=1;o<=12;o++)r.push(u(o));return r},initDays:function(e,l,a){var t=new Date,v=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),b=v==e&&n==l,o=new Date(e,l,0).getDate(),i=[];if(b&&a)for(var c=1;c<=r;c++)i.push(u(c));else for(var s=1;s<=o;s++)i.push(u(s));return i}},limitHour:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=new Date,a=[],t=[],v=[],n=(new Date).getHours(),r=["周日","周一","周二","周三","周四","周五","周六"],b=0;b<e;b++){var o=void 0,i=void 0,c=void 0,s=void 0;o=l.getFullYear(),i=u(l.getMonth()+1),c=u(l.getDate()),s=r[l.getDay()];var f="";switch(b){case 0:f="今天";break;case 1:f="明天";break;case 2:f="后天";break;default:f=i+"月"+c+"日 "+s;break}a.push({label:f,value:o+"-"+i+"-"+c,today:0==b}),l.setDate(l.getDate()+1)}t=n>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}];for(var p=n>12?n-12:n;p<=12;p++)v.push({label:u(p),value:u(n>12?p+12:p)});return{date:a,areas:t,hours:v}},initAreas:function(e){var l=[],a=(new Date).getHours();return l=e.today&&a>12?[{label:"下午",value:1}]:[{label:"上午",value:0},{label:"下午",value:1}],l},initHours:function(e,l){var a=[],t=(new Date).getHours();if(e.today)if(1==l.value&&t<=12)for(var v=1;v<=12;v++)a.push({label:u(v),value:u(1==l.value?v+12:v)});else for(var n=t>12?t-12:t;n<=12;n++)a.push({label:u(n),value:u(1==l.value?n+12:n)});else for(var r=1;r<=12;r++)a.push({label:u(r),value:u(1==l.value?r+12:r)});return a}},limit:{init:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,v=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,n=new Date,r=new Date((new Date).getTime()+60*v*1e3),b=[],o=[],i=[],c=r.getHours(),s=Math.floor(r.getMinutes()/t)*t,f=["周日","周一","周二","周三","周四","周五","周六"],p=0;p<e;p++){var d=void 0,h=void 0,y=void 0,g=void 0;d=n.getFullYear(),h=u(n.getMonth()+1),y=u(n.getDate()),g=f[n.getDay()];var m="";switch(p){case 0:m="今天";break;case 1:m="明天";break;case 2:m="后天";break;default:m=h+"月"+y+"日 "+g;break}b.push({label:m,value:d+"-"+h+"-"+y,flag:0==p}),n.setDate(n.getDate()+1)}c<l&&(c=l),c>a&&(c=a);for(var _=1*c;_<=1*a;_++)o.push({label:u(_),value:u(_),flag:_==c});for(var w=s;w<60;w+=1*t)i.push({label:u(w),value:u(w)});return{date:b,hours:o,minutes:i}},initHours:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:30),t=arguments.length>4?arguments[4]:void 0,v=[],n=t.split("-"),r=new Date,b=r.getFullYear(),o=r.getMonth()+1,i=r.getDate(),c=new Date((new Date).getTime()+60*a*1e3),s=c.getHours(),f=b==n[0]&&o==n[1]&&i==n[2];if(s>l&&(s=l),f)for(var p=1*s;p<=1*l;p++)v.push({label:u(p),value:u(p),flag:p==s});else for(var d=1*e;d<=1*l;d++)v.push({label:u(d),value:u(d),flag:!1});return v},initMinutes:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,a=arguments.length>4?arguments[4]:void 0,t=arguments.length>5?arguments[5]:void 0,v=[],n=new Date((new Date).getTime()+60*l*1e3),r=a.split("-"),b=new Date,o=b.getFullYear(),i=b.getMonth()+1,c=b.getDate(),s=n.getHours(),f=Math.floor(n.getMinutes()/e)*e,p=o==r[0]&&i==r[1]&&c==r[2];if(p)if(t==s)for(var d=f;d<60;d+=1*e)v.push({label:u(d),value:u(d)});else for(var h=0;h<60;h+=1*e)v.push({label:u(h),value:u(h)});else for(var y=0;y<60;y+=1*e)v.push({label:u(y),value:u(y)});return v}},range:{init:function(e,l,a,t){new Date;var v=[],n=new Date(e.toString()),r=new Date(l.toString());e>l&&(n=new Date(l.toString()),r=new Date(e.toString()));for(var b=n.getFullYear(),o=(n.getMonth(),r.getFullYear()),i=[],c=[],s=[],f=[],p=[],d=[],h=t?1*a[1]:a[1]+1,y=new Date(b,h,0).getDate(),g=b;g<=o;g++)i.push(g+"");for(var m=1;m<=12;m++)c.push(u(m));for(var _=1;_<=y;_++)s.push(u(_));for(var w=b;w<=o;w++)f.push(w+"");for(var O=1;O<=12;O++)p.push(u(O));for(var $=1;$<=y;$++)d.push(u($));return t?(v=[i.indexOf(a[0]),c.indexOf(a[1]),s.indexOf(a[2]),0,f.indexOf(a[0]),p.indexOf(a[1]),d.indexOf(a[2])],{fyears:i,fmonths:c,fdays:s,tyears:f,tmonths:p,tdays:d,defaultVal:v}):{fyears:i,fmonths:c,fdays:s,tyears:f,tmonths:p,tdays:d}},initDays:function(e,l){for(var a=new Date(e,l,0).getDate(),t=[],v=1;v<=a;v++)t.push(u(v));return t}}},v=t;l.default=v},"96cf":function(e,l){!function(l){"use strict";var a,u=Object.prototype,t=u.hasOwnProperty,v="function"===typeof Symbol?Symbol:{},n=v.iterator||"@@iterator",r=v.asyncIterator||"@@asyncIterator",b=v.toStringTag||"@@toStringTag",o="object"===typeof e,i=l.regeneratorRuntime;if(i)o&&(e.exports=i);else{i=l.regeneratorRuntime=o?e.exports:{},i.wrap=_;var c="suspendedStart",s="suspendedYield",f="executing",p="completed",d={},h={};h[n]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(C([])));g&&g!==u&&t.call(g,n)&&(h=g);var m=k.prototype=O.prototype=Object.create(h);$.prototype=m.constructor=k,k.constructor=$,k[b]=$.displayName="GeneratorFunction",i.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===$||"GeneratorFunction"===(l.displayName||l.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,b in e||(e[b]="GeneratorFunction")),e.prototype=Object.create(m),e},i.awrap=function(e){return{__await:e}},x(j.prototype),j.prototype[r]=function(){return this},i.AsyncIterator=j,i.async=function(e,l,a,u){var t=new j(_(e,l,a,u));return i.isGeneratorFunction(l)?t:t.next().then(function(e){return e.done?e.value:t.next()})},x(m),m[b]="Generator",m[n]=function(){return this},m.toString=function(){return"[object Generator]"},i.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var u=l.pop();if(u in e)return a.value=u,a.done=!1,a}return a.done=!0,a}},i.values=C,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!e)for(var l in this)"t"===l.charAt(0)&&t.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function u(u,t){return r.type="throw",r.arg=e,l.next=u,t&&(l.method="next",l.arg=a),!!t}for(var v=this.tryEntries.length-1;v>=0;--v){var n=this.tryEntries[v],r=n.completion;if("root"===n.tryLoc)return u("end");if(n.tryLoc<=this.prev){var b=t.call(n,"catchLoc"),o=t.call(n,"finallyLoc");if(b&&o){if(this.prev<n.catchLoc)return u(n.catchLoc,!0);if(this.prev<n.finallyLoc)return u(n.finallyLoc)}else if(b){if(this.prev<n.catchLoc)return u(n.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return u(n.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a];if(u.tryLoc<=this.prev&&t.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var v=u;break}}v&&("break"===e||"continue"===e)&&v.tryLoc<=l&&l<=v.finallyLoc&&(v=null);var n=v?v.completion:{};return n.type=e,n.arg=l,v?(this.method="next",this.next=v.finallyLoc,d):this.complete(n)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),d},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),E(a),d}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var u=a.completion;if("throw"===u.type){var t=u.arg;E(a)}return t}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,u){return this.delegate={iterator:C(e),resultName:l,nextLoc:u},"next"===this.method&&(this.arg=a),d}}}function _(e,l,a,u){var t=l&&l.prototype instanceof O?l:O,v=Object.create(t.prototype),n=new D(u||[]);return v._invoke=A(e,a,n),v}function w(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(u){return{type:"throw",arg:u}}}function O(){}function $(){}function k(){}function x(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function j(e){function l(a,u,v,n){var r=w(e[a],e,u);if("throw"!==r.type){var b=r.arg,o=b.value;return o&&"object"===typeof o&&t.call(o,"__await")?Promise.resolve(o.__await).then(function(e){l("next",e,v,n)},function(e){l("throw",e,v,n)}):Promise.resolve(o).then(function(e){b.value=e,v(b)},function(e){return l("throw",e,v,n)})}n(r.arg)}var a;function u(e,u){function t(){return new Promise(function(a,t){l(e,u,a,t)})}return a=a?a.then(t,t):t()}this._invoke=u}function A(e,l,a){var u=c;return function(t,v){if(u===f)throw new Error("Generator is already running");if(u===p){if("throw"===t)throw v;return U()}a.method=t,a.arg=v;while(1){var n=a.delegate;if(n){var r=S(n,a);if(r){if(r===d)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===c)throw u=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=f;var b=w(e,l,a);if("normal"===b.type){if(u=a.done?p:s,b.arg===d)continue;return{value:b.arg,done:a.done}}"throw"===b.type&&(u=p,a.method="throw",a.arg=b.arg)}}}function S(e,l){var u=e.iterator[l.method];if(u===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,S(e,l),"throw"===l.method))return d;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var t=w(u,e.iterator,l.arg);if("throw"===t.type)return l.method="throw",l.arg=t.arg,l.delegate=null,d;var v=t.arg;return v?v.done?(l[e.resultName]=v.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,d):v:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,d)}function P(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function E(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(e){if(e){var l=e[n];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var u=-1,v=function l(){while(++u<e.length)if(t.call(e,u))return l.value=e[u],l.done=!1,l;return l.value=a,l.done=!0,l};return v.next=v}}return{next:U}}function U(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a048:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],t=u;l.default=t},a34a:function(e,l,a){e.exports=a("bbdd")},b324:function(e,l,a){},b339:function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("085f"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},bbdd:function(e,l,a){var u=function(){return this||"object"===typeof self&&self}()||Function("return this")(),t=u.regeneratorRuntime&&Object.getOwnPropertyNames(u).indexOf("regeneratorRuntime")>=0,v=t&&u.regeneratorRuntime;if(u.regeneratorRuntime=void 0,e.exports=a("96cf"),t)u.regeneratorRuntime=v;else try{delete u.regeneratorRuntime}catch(n){u.regeneratorRuntime=void 0}},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(u){"object"===typeof window&&(a=window)}e.exports=a},d764:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=r(a("a34a")),t=r(a("8c65")),v=r(a("777f")),n=a("6484");function r(e){return e&&e.__esModule?e:{default:e}}function b(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},u=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),u.forEach(function(l){o(e,l,a[l])})}return e}function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function i(e,l,a,u,t,v,n){try{var r=e[v](n),b=r.value}catch(o){return void a(o)}r.done?l(b):Promise.resolve(b).then(u,t)}function c(e){return function(){var l=this,a=arguments;return new Promise(function(u,t){var v=e.apply(l,a);function n(e){i(v,u,t,n,r,"next",e)}function r(e){i(v,u,t,n,r,"throw",e)}n(void 0)})}}var s=!1;function f(e){return p.apply(this,arguments)}function p(){return p=c(u.default.mark(function e(l){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return l.header["X-WAREHOUSE"]=(0,n.getStorageSync)("city").warehouse_id,l.header["X-PickUp"]=(0,n.getStorageSync)("pickup").pickup_id||"",l.header["x-ca-systemInfo"]=(0,n.getSysteminfo)("systemInfo"),2==l.header.thisUrl&&(l.baseUrl=v.default.activeUrl),e.abrupt("return",l);case 5:case"end":return e.stop()}},e,this)})),p.apply(this,arguments)}function d(){var e=!1,l=!1;return c(u.default.mark(function a(){return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return e||(e=!0,getNewTokenServe().then(function(a){(0,n.setTokenStorage)(a.data.data.token),l=!0,e=!1}).catch(function(){l=!1,e=!1})),a.abrupt("return",new Promise(function(a){var u=setInterval(function(){e||(clearInterval(u),a(l?"success":"fail"))},100)}));case 2:case"end":return a.stop()}},a,this)}))}var h=new t.default;h.setConfig(function(e){return e.baseUrl=v.default.Url,e});var y=new t.default;d();y.setConfig(function(e){return e.baseUrl=v.default.Url,e.header=b({},e.header,v.default.header),e}),y.validateStatus=function(e){return 200===e},y.interceptor.request(function(e,l){return e.header=b({},e.header,{"X-Authorization":(0,n.getTokenStorage)()}),f(e).then(function(l){e=l}),e.header["isExp"]?e.baseUrl=v.default.ExpUrl:e.baseUrl=v.default.Url,e}),y.interceptor.response(function(){var l=c(u.default.mark(function l(a){return u.default.wrap(function(l){while(1)switch(l.prev=l.next){case 0:if("token验证失败"!==a.data.msg){l.next=5;break}if(!s){l.next=3;break}return l.abrupt("return");case 3:s=!0,e.showModal({content:"该功能需要登录，请先登录",title:"提示",success:function(l){s=!1,l.confirm?(e.removeStorage({key:"X-Authorization"}),e.removeStorage({key:"isLogin"}),e.navigateTo({url:"/pages/login/login"})):e.navigateBack()}});case 5:return l.abrupt("return",a);case 6:case"end":return l.stop()}},l,this)}));return function(e){return l.apply(this,arguments)}}(),function(e){return e});var g=y;l.default=g}).call(this,a("6e42")["default"])},dc67:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],t=u;l.default=t},e76f:function(e,l,a){"use strict";(function(e,a){function u(l){e.showToast({title:l,icon:"none",duration:2e3})}function t(e,l,a){wx.showModal({title:"",content:e,confirmText:l,confirmColor:"#eb3c39",cancelText:"取消",cancelColor:"#030303",success:a})}function v(l){e.makePhoneCall({phoneNumber:l,success:function(e){console.log(a("成功"," at utils\\common.js:28"))},fail:function(e){console.log(a("失败"," at utils\\common.js:31"))}})}function n(){e.showLoading({title:"清除中"}),e.getStorageInfo({success:function(l){var a=l.keys.length;l.keys.forEach(function(l){e.removeStorage({key:l,success:function(){a--,0==a&&(e.hideLoading(),e.showToast({title:"清除成功",icon:"none"}))}})})},fail:function(){e.hideLoading(),u("清除成功")}})}function r(l,a,u,t){var v={timeStamp:String(l.timeStamp),nonceStr:String(l.nonceStr),package:String(l.package),signType:String(l.signType),paySign:String(l.sign),success:a,fail:u,complete:t};e.requestPayment(v)}Object.defineProperty(l,"__esModule",{value:!0}),l.toast=u,l.showModal=t,l.phoneCall=v,l.clearAllStorage=n,l.setPay=r}).call(this,a("6e42")["default"],a("0de9")["default"])},ec6f:function(e,l,a){"use strict";(function(e,a){function u(l,u){l=Number(l),console.log(e("旧版本",l," at common\\checkUpdater.js:4")),a.request({url:"http://10.10.10.3:9005/Version/checkVersion",method:"POST",success:function(u){var t=u.data.data,v=t.version;v=v.replace(/\./g,""),v=Number(v),console.log(e("新版本",v," at common\\checkUpdater.js:13")),l<v&&(console.log(e("需要更新"," at common\\checkUpdater.js:16")),a.showModal({showCancel:!1,content:"检测有新版本，请点击确认更新",success:function(l){if(l.confirm){var u=t.androidWgtUrl,v=t.iosWgtUrl;console.log(e("安装下载地址",u," at common\\checkUpdater.js:26")),console.log(e("苹果下载地址",v," at common\\checkUpdater.js:27"));var n="",r=!1;if("android"===plus.os.name.toLowerCase()?(console.log(e("安卓系统"," at common\\checkUpdater.js:32")),u?(console.log(e("发现下载地址"," at common\\checkUpdater.js:34")),u.match(RegExp(/.wgt/))?(console.log(e("确认wgt热更新包"," at common\\checkUpdater.js:37")),n=u,r=!0):console.log(e("安卓推荐.wgt强制更新，.apk的强制更新请您自行修改程序"," at common\\checkUpdater.js:41"))):console.log(e("下载地址是空的，无法继续"," at common\\checkUpdater.js:44"))):console.log(e("苹果系统"," at common\\checkUpdater.js:47")),r){console.log(e("任务开始"," at common\\checkUpdater.js:63")),console.log(e("下载地址",n," at common\\checkUpdater.js:64"));var b=a.downloadFile({url:n,success:function(l){console.log(e(l," at common\\checkUpdater.js:68")),200===l.statusCode&&(console.log(e("下载成功"," at common\\checkUpdater.js:70")),plus.runtime.install(l.tempFilePath,{force:!1},function(){console.log(e("install success..."," at common\\checkUpdater.js:74")),a.navigateTo({url:"/pages/index/index.vue"}),plus.runtime.restart()},function(l){console.error(e("install fail..."," at common\\checkUpdater.js:80"))}))}});b.onProgressUpdate(function(l){console.log(e("下载进度"+l.progress," at common\\checkUpdater.js:86")),console.log(e("已经下载的数据长度"+l.totalBytesWritten," at common\\checkUpdater.js:87")),console.log(e("预期需要下载的数据总长度"+l.totalBytesExpectedToWrite," at common\\checkUpdater.js:88"))})}else console.log(e("下载地址未准备，无法开启下载任务"," at common\\checkUpdater.js:96"))}}}))}})}Object.defineProperty(l,"__esModule",{value:!0}),l.checkUpdater=u}).call(this,a("0de9")["default"],a("6e42")["default"])},f0d0:function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("c565"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])},f3ae:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],t=u;l.default=t},fe7a:function(e,l,a){"use strict";(function(e){a("b324");u(a("66fd"));var l=u(a("328c"));function u(e){return e&&e.__esModule?e:{default:e}}e(l.default)}).call(this,a("6e42")["createPage"])}}]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/directory/phone-alphabet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/directory/phone-alphabet.js';

define('components/directory/phone-alphabet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/directory/phone-alphabet"], {
  "104a": function a(t, e, n) {
    "use strict";

    var a = n("8b95"),
        i = n.n(a);
    i.a;
  },
  "1ead": function ead(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("fe54"),
        i = n.n(a);

    for (var o in a) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(o);
    }

    e["default"] = i.a;
  },
  "8b95": function b95(t, e, n) {},
  ba47: function ba47(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("df51"),
        i = n("1ead");

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    n("104a");
    var s = n("2877"),
        r = Object(s["a"])(i["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  df51: function df51(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  fe54: function fe54(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      name: "phone-alphabet",
      props: {
        phones: Object,
        phoneListIndex: String
      },
      data: function data() {
        return {
          touchStatus: !1,
          timer: null,
          activeClass: "A",
          phonesArr: [],
          touchmove: !1
        };
      },
      mounted: function mounted() {
        var t = Object.keys(this.phones);
        this.phonesArr = t;
      },
      watch: {
        phoneListIndex: function phoneListIndex(t) {
          this.activeClass = t;
        }
      },
      methods: {
        handleTouchStart: function handleTouchStart(t) {
          this.$emit("reset", !1);
          var e = t.target.dataset.key;
          this.activeClass = e, this.$emit("change", t.target.dataset.key), this.touchStatus = !0;
        },
        handleTouchMove: function handleTouchMove(t) {
          var e = this;
          this.$emit("scrollAnimationOFF", !1), this.touchStatus && (this.touchmove = !0, this.timer && clearTimeout(this.timer), this.timer = setTimeout(function () {
            var n = t.touches[0].clientY - 54,
                a = Math.floor(n / 20);
            a >= 0 && a < e.phonesArr.length && (e.activeClass = e.phonesArr[a], e.$emit("change", e.phonesArr[a]));
          }, 16));
        },
        handleTouchEnd: function handleTouchEnd(t) {
          this.$emit("scrollAnimationOFF", !0), this.touchStatus = !1, this.touchmove = !1;
        }
      }
    };
    e.default = a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/directory/phone-alphabet-create-component', {
  'components/directory/phone-alphabet-create-component': function componentsDirectoryPhoneAlphabetCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ba47"));
  }
}, [['components/directory/phone-alphabet-create-component']]]);
});
require('components/directory/phone-alphabet.js');
__wxRoute = 'components/directory/phone-directory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/directory/phone-directory.js';

define('components/directory/phone-directory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/directory/phone-directory"], {
  "111b": function b(t, e, n) {
    "use strict";

    var o = n("b79c"),
        i = n.n(o);
    i.a;
  },
  "346e": function e(t, _e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(_e, "a", function () {
      return o;
    }), n.d(_e, "b", function () {
      return i;
    });
  },
  "5e45": function e45(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("346e"),
        i = n("874a");

    for (var c in i) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(c);
    }

    n("111b");
    var r = n("2877"),
        a = Object(r["a"])(i["default"], o["a"], o["b"], !1, null, "8eb5194e", null);
    e["default"] = a.exports;
  },
  "874a": function a(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("df42"),
        i = n.n(o);

    for (var c in o) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(c);
    }

    e["default"] = i.a;
  },
  b79c: function b79c(t, e, n) {},
  df42: function df42(t, e, n) {
    "use strict";

    (function (t, o) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;

      var i = function i() {
        return n.e("components/directory/phone-list").then(n.bind(null, "91b9"));
      },
          c = function c() {
        return n.e("components/directory/phone-alphabet").then(n.bind(null, "ba47"));
      },
          r = {
        name: "phone-directory",
        components: {
          phoneList: i,
          phoneAlphabet: c
        },
        props: {
          phones: {
            type: Object
          },
          default: !1
        },
        data: function data() {
          return {
            isSect: !0,
            winHeight: 0,
            letter: "A",
            scrollAnimationOFF: !0,
            phoneListIndex: "A",
            reset: !0
          };
        },
        computed: {
          phonesEscape: function phonesEscape() {
            return escape(JSON.stringify(this.phones));
          }
        },
        mounted: function mounted() {
          var e = t.getSystemInfoSync().windowHeight;
          this.winHeight = e - 56, this.phones || t.showToast({
            title: "没有数据",
            icon: "none",
            mask: !1,
            duration: 1500
          });
        },
        methods: {
          goSecletCity: function goSecletCity() {
            t.navigateTo({
              url: "../../pages/local/cityList"
            });
          },
          handleClick: function handleClick(t) {
            console.log(o("e", t, " at components\\directory\\phone-directory.vue:78")), this.$emit("paramClick", t);
          },
          handleDatasetKey: function handleDatasetKey(t) {
            this.letter = t;
          },
          handleScrollAnimationOFF: function handleScrollAnimationOFF(t) {
            this.scrollAnimationOFF = t;
          },
          handlePhoneListIndex: function handlePhoneListIndex(t) {
            this.reset && (this.phoneListIndex = t);
          },
          handleReset: function handleReset(t) {
            t && (this.letter = ""), this.reset = t;
          }
        }
      };

      e.default = r;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/directory/phone-directory-create-component', {
  'components/directory/phone-directory-create-component': function componentsDirectoryPhoneDirectoryCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5e45"));
  }
}, [['components/directory/phone-directory-create-component']]]);
});
require('components/directory/phone-directory.js');
__wxRoute = 'components/directory/phone-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/directory/phone-list.js';

define('components/directory/phone-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/directory/phone-list"], {
  2713: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("36c9"),
        i = n.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(r);
    }

    e["default"] = i.a;
  },
  "36c9": function c9(t, e, n) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        name: "phone-list",
        props: {
          phones: Object,
          letter: String,
          scrollAnimationOFF: Boolean
        },
        data: function data() {
          return {
            winHeight: 0,
            scrollTop: 0,
            letterDetails: [],
            timer: null,
            sysWidth: "100%"
          };
        },
        computed: {
          scrollViewId: function scrollViewId() {
            return this.letter;
          }
        },
        mounted: function mounted() {
          var e = this;
          t.getSystemInfo({
            success: function success(t) {
              e.sysWidth = t.screenWidth - 40 + "px";
            }
          }), this.winHeight = t.getSystemInfoSync().windowHeight - 100;
        },
        methods: {
          handleClick: function handleClick(t) {
            console.log(n(t.target.dataset, " at components\\directory\\phone-list.vue:62")), this.$emit("handleClick", t.target.dataset);
          },
          handleScroll: function handleScroll(e) {
            var n = this;

            if (0 === this.letterDetails.length) {
              var o = t.createSelectorQuery().in(this).selectAll(".list-item");
              o.boundingClientRect(function (t) {
                var e = t[0].top;
                t.forEach(function (t, o) {
                  t.top = t.top - e, t.bottom = t.bottom - e, n.letterDetails.push({
                    id: t.id,
                    top: t.top,
                    bottom: t.bottom
                  });
                });
              }).exec();
            }

            var i = e.detail.scrollTop;
            this.letterDetails.some(function (t, e) {
              if (i >= t.top && i <= t.bottom - 5) return n.$emit("change", t.id), n.$emit("reset", !0), !0;
            });
          }
        }
      };
      e.default = o;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  6578: function _(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  "91b9": function b9(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("6578"),
        i = n("2713");

    for (var r in i) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(r);
    }

    n("f0a5");
    var l = n("2877"),
        a = Object(l["a"])(i["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = a.exports;
  },
  ba37: function ba37(t, e, n) {},
  f0a5: function f0a5(t, e, n) {
    "use strict";

    var o = n("ba37"),
        i = n.n(o);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/directory/phone-list-create-component', {
  'components/directory/phone-list-create-component': function componentsDirectoryPhoneListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("91b9"));
  }
}, [['components/directory/phone-list-create-component']]]);
});
require('components/directory/phone-list.js');
__wxRoute = 'components/popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/popup.js';

define('components/popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/popup"], {
  "2f33": function f33(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "50a8": function a8(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("74d6"),
        u = e.n(i);

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "5b81": function b81(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("2f33"),
        u = e("50a8");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("fc44");
    var a = e("2877"),
        o = Object(a["a"])(u["default"], i["a"], i["b"], !1, null, "25a76df8", null);
    n["default"] = o.exports;
  },
  "74d6": function d6(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = {
      data: function data() {
        return {};
      },
      props: {
        title: String,
        text: {
          type: String
        },
        isShow: {
          type: Boolean
        },
        isFail: {
          type: Boolean,
          required: !0
        },
        cancal: String,
        confirm: String
      },
      methods: {
        succer: function succer() {
          this.$emit("succer", "huidiao"), this.$emit("huidiao", "FSAF");
        },
        fail: function fail() {
          this.$emit("fail", "我是");
        }
      }
    };
    n.default = i;
  },
  b90d: function b90d(t, n, e) {},
  fc44: function fc44(t, n, e) {
    "use strict";

    var i = e("b90d"),
        u = e.n(i);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/popup-create-component', {
  'components/popup-create-component': function componentsPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5b81"));
  }
}, [['components/popup-create-component']]]);
});
require('components/popup.js');
__wxRoute = 'components/w-picker/w-picker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/w-picker/w-picker.js';

define('components/w-picker/w-picker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/w-picker/w-picker"], {
  3395: function _(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("742c"),
        l = e("fef2");

    for (var s in l) {
      "default" !== s && function (a) {
        e.d(t, a, function () {
          return l[a];
        });
      }(s);
    }

    e("c1180");
    var n = e("2877"),
        d = Object(n["a"])(l["default"], r["a"], r["b"], !1, null, null, null);
    t["default"] = d.exports;
  },
  "742c": function c(a, t, e) {
    "use strict";

    var r = function r() {
      var a = this,
          t = a.$createElement;
      a._self._c;
    },
        l = [];

    e.d(t, "a", function () {
      return r;
    }), e.d(t, "b", function () {
      return l;
    });
  },
  b8ff: function b8ff(a, t, e) {
    "use strict";

    (function (a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = d(e("a048")),
          l = d(e("f3ae")),
          s = d(e("dc67")),
          n = d(e("92e0"));

      function d(a) {
        return a && a.__esModule ? a : {
          default: a
        };
      }

      function u(a, t) {
        for (var e = 0; e < t.length; e++) {
          if (a === t[e]) return !0;
        }

        throw new Error("mode无效，请选择有效的mode!");
      }

      var i = {
        data: function data() {
          return {
            result: [],
            data: {},
            checkArr: [],
            checkValue: [],
            pickVal: [],
            showPicker: !1,
            resultStr: "",
            itemHeight: "height: ".concat(a.upx2px(88), "px;")
          };
        },
        computed: {},
        props: {
          mode: {
            type: String,
            validator: function validator(a) {
              var t = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range", "linkage"];
              return u(a, t);
            },
            default: function _default() {
              return "date";
            }
          },
          themeColor: {
            type: String,
            default: function _default() {
              return "#f5a200";
            }
          },
          startYear: {
            type: [String, Number],
            default: function _default() {
              return "1970";
            }
          },
          endYear: {
            type: [String, Number],
            default: function _default() {
              return new Date().getFullYear() + "";
            }
          },
          defaultVal: {
            type: Array,
            default: function _default() {
              return [0, 0, 0, 0, 0, 0, 0];
            }
          },
          areaCode: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          hideArea: {
            type: Boolean,
            default: !1
          },
          step: {
            type: [String, Number],
            default: 1
          },
          current: {
            type: Boolean,
            default: !1
          },
          selectList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          dayStep: {
            type: [String, Number],
            default: 7
          },
          startHour: {
            type: [String, Number],
            default: 8
          },
          endHour: {
            type: [String, Number],
            default: 20
          },
          minuteStep: {
            type: [String, Number],
            default: 10
          },
          afterStep: {
            type: [String, Number],
            default: 30
          },
          disabledAfter: {
            type: Boolean,
            default: !1
          },
          linkList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          value: {
            type: Array,
            default: function _default() {
              return null;
            }
          },
          level: {
            type: [Number, String],
            default: 2
          }
        },
        watch: {
          mode: function mode() {
            this.initData();
          },
          selectList: function selectList() {
            this.initData();
          },
          linkList: function linkList() {
            this.initData();
          }
        },
        methods: {
          getLinkageVal: function getLinkageVal(a, t) {
            var e = [],
                r = a,
                l = this.linkList,
                s = this.level,
                n = 0,
                d = [],
                u = [],
                i = "",
                c = [];

            switch (s) {
              case 2:
                e = [0, 0];
                break;

              case 3:
                e = [0, 0, 0];
                break;
            }

            var h = function a(l, n, h) {
              return n < s && (c.push(l), l.map(function (l, s) {
                (t ? l.value == r[n] : l.label == r[n]) && (e[n] = s, d.push(l.label), u.push(l.value), i += l.label, l.children && a(l.children, n += 1));
              }), {
                data: c,
                dval: e,
                checkArr: d,
                checkValue: u,
                resultStr: i
              });
            };

            return h(l, n);
          },
          getRegionVal: function getRegionVal(a, t) {
            var e = a[0],
                n = a[1],
                d = 0,
                u = 0,
                i = 0,
                c = [],
                h = this;
            if (r.default.map(function (a, r) {
              (t ? a.value == e : a.label == e) && (d = r);
            }), l.default[d].map(function (a, e) {
              (t ? a.value == n : a.label == n) && (u = e);
            }), h.hideArea) c = [d, u];else {
              var o = a[2];
              s.default[d][u].map(function (a, e) {
                (t ? a.value == o : a.label == o) && (i = e);
              }), c = [d, u, i];
            }
            return c;
          },
          useCurrent: function useCurrent() {
            var a = new Date(),
                t = a.getFullYear().toString(),
                e = this.formatNum(a.getMonth() + 1).toString(),
                r = this.formatNum(a.getDate()).toString(),
                l = this.formatNum(a.getHours()).toString(),
                s = this.formatNum(a.getMinutes()).toString(),
                n = this.formatNum(a.getSeconds()).toString();
            return this.current ? [t, e, r, l, (Math.floor(s / this.step) * this.step).toString(), n] : this.defaultVal;
          },
          formatNum: function formatNum(a) {
            return a < 10 ? "0" + a : a + "";
          },
          maskTap: function maskTap() {
            this.showPicker = !1;
          },
          show: function show() {
            this.showPicker = !0;
          },
          hide: function hide() {
            this.showPicker = !1;
          },
          pickerCancel: function pickerCancel() {
            this.$emit("cancel", {
              checkArr: this.checkArr,
              defaultVal: this.pickVal
            }), this.showPicker = !1;
          },
          pickerConfirm: function pickerConfirm(t) {
            switch (this.mode) {
              case "range":
                var e = this.checkArr,
                    r = new Date(e[0], e[1], e[2]),
                    l = new Date(e[3], e[4], e[5]),
                    s = this.pickVal;
                r > l ? (this.checkArr = [e[3], e[4], e[5], e[0], e[1], e[2]], this.pickVal = [s[4], s[5], s[6], 0, s[0], s[1], s[2]], this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[3] + "-" + e[4] + "-" + e[5],
                  to: e[0] + "-" + e[1] + "-" + e[2],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                })) : this.$emit("confirm", {
                  checkArr: this.checkArr,
                  from: e[0] + "-" + e[1] + "-" + e[2],
                  to: e[3] + "-" + e[4] + "-" + e[5],
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "limit":
                var n = new Date().getTime(),
                    d = new Date(this.resultStr.replace(/-/g, "/")).getTime();
                if (n > d) return void a.showModal({
                  title: "提示",
                  content: "选择时间必须大于当前时间",
                  confirmColor: this.themeColor
                });
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              case "region":
              case "linkage":
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  checkValue: this.checkValue,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;

              default:
                this.$emit("confirm", {
                  checkArr: this.checkArr,
                  defaultVal: this.pickVal,
                  result: this.resultStr
                });
                break;
            }

            this.showPicker = !1;
          },
          bindChange: function bindChange(a) {
            var t,
                e,
                r,
                d,
                u,
                i,
                c,
                h,
                o,
                f = this,
                m = a.detail.value,
                y = "",
                g = "",
                k = "",
                b = "",
                v = "",
                p = "",
                A = f.checkArr,
                S = [],
                V = [],
                w = f.mode;

            switch (w) {
              case "limitHour":
                if (d = f.data.date[m[0]], u = f.data.areas[m[1]], f.data.hours[m[2]], d.value != A[0].value) {
                  m[1] = 0, m[2] = 0;
                  var H = n.default.limitHour.initAreas(d);
                  f.data.areas = H;
                  var D = n.default.limitHour.initHours(d, f.data.areas[m[1]]);
                  f.data.hours = D;
                }

                if (u.value != A[1].value) {
                  m[2] = 0;
                  var N = n.default.limitHour.initHours(d, f.data.areas[m[1]]);
                  f.data.hours = N;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], c = f.data.areas[m[1]] || f.data.areas[f.data.areas.length - 1], h = f.data.hours[m[2]] || f.data.hours[f.data.hours.length - 1], f.checkArr = [i, c, h], f.resultStr = "".concat(i.value + " " + c.label + " " + h.label + "时");
                break;

              case "limit":
                if (d = f.data.date[m[0]], u = f.data.hours[m[1]], d.value != A[0].value) {
                  var M = n.default.limit.initHours(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value),
                      C = n.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value, u.value);
                  f.data.hours = M, f.data.minutes = C;
                }

                if (u.value != A[1].value) {
                  var L = n.default.limit.initMinutes(f.startHour, f.endHour, f.minuteStep, f.afterStep, d.value, u.value);
                  f.data.minutes = L;
                }

                i = f.data.date[m[0]] || f.data.date[f.data.date.length - 1], h = f.data.hours[m[1]] || f.data.hours[f.data.hours.length - 1], o = f.data.minutes[m[2]] || f.data.minutes[f.data.minutes.length - 1], f.checkArr = [i, h, o], f.resultStr = "".concat(i.value + " " + h.value + ":" + o.value + ":00");
                break;

              case "range":
                var $ = f.data.fyears[m[0]] || f.data.fyears[f.data.fyears.length - 1],
                    T = f.data.fmonths[m[1]] || f.data.fmonths[f.data.fmonths.length - 1],
                    Y = f.data.fdays[m[2]] || f.data.fdays[f.data.fdays.length - 1],
                    P = f.data.tyears[m[4]] || f.data.tyears[f.data.tyears.length - 1],
                    x = f.data.tmonths[m[5]] || f.data.tmonths[f.data.tmonths.length - 1],
                    _ = f.data.tdays[m[6]] || f.data.tdays[f.data.tdays.length - 1];

                $ != A[0] && (S = n.default.range.initDays($, T), f.data.fdays = S), T != A[1] && (S = n.default.range.initDays($, T), f.data.fdays = S), P != A[3] && (S = n.default.range.initDays(P, x), f.data.tdays = S), x != A[4] && (S = n.default.range.initDays(P, x), f.data.tdays = S), f.checkArr = [$, T, Y, P, x, _], f.resultStr = "".concat($ + "-" + T + "-" + Y + "至" + P + "-" + x + "-" + _);
                break;

              case "half":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], r = f.data.areas[m[3]] || f.data.areas[f.data.areas.length - 1], y != A[0] && (S = n.default.date.initDays(y, g, f.disabledAfter), V = n.default.date.initMonths(y, f.disabledAfter), f.data.days = S, f.data.months = V), g != A[1] && (S = n.default.date.initDays(y, g, f.disabledAfter), f.data.days = S), f.checkArr = [y, g, k, r], f.resultStr = "".concat(y + "-" + g + "-" + k + r.label);
                break;

              case "date":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], y != A[0] && (S = n.default.date.initDays(y, g, f.disabledAfter), V = n.default.date.initMonths(y, f.disabledAfter), f.data.days = S, f.data.months = V), g != A[1] && (S = n.default.date.initDays(y, g, f.disabledAfter), f.data.days = S), f.checkArr = [y, g, k], f.resultStr = "".concat(y + "-" + g + "-" + k);
                break;

              case "yearMonth":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], y != A[0] && (V = n.default.date.initMonths(y, f.disabledAfter), f.data.months = V), f.checkArr = [y, g], f.resultStr = "".concat(y + "-" + g);
                break;

              case "dateTime":
                y = f.data.years[m[0]] || f.data.years[f.data.years.length - 1], g = f.data.months[m[1]] || f.data.months[f.data.months.length - 1], k = f.data.days[m[2]] || f.data.days[f.data.days.length - 1], b = f.data.hours[m[3]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[4]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[5]] || f.data.seconds[f.data.seconds.length - 1], y != A[0] && (S = n.default.date.initDays(y, g), f.data.days = S), g != A[1] && (S = n.default.date.initDays(y, g), f.data.days = S), f.checkArr = [y, g, k, b, v, p], f.resultStr = "".concat(y + "-" + g + "-" + k + " " + b + ":" + v + ":" + p);
                break;

              case "time":
                b = f.data.hours[m[0]] || f.data.hours[f.data.hours.length - 1], v = f.data.minutes[m[1]] || f.data.minutes[f.data.minutes.length - 1], p = f.data.seconds[m[2]] || f.data.seconds[f.data.seconds.length - 1], f.checkArr = [b, v, p], f.resultStr = "".concat(b + ":" + v + ":" + p);
                break;

              case "linkage":
                var B,
                    R,
                    j,
                    E = this.linkList;
                B = f.data[0][m[0]] || f.data[0][0], R = f.data[1][m[1]] || f.data[1][0], 3 == this.level ? (j = f.data[2][m[2]] || f.data[2][0], B.label != A[0] && (f.data[1] = E[m[0]].children, f.data[2] = E[m[0]].children[m[1]].children, m[1] = 0, m[2] = 0, R = f.data[1][m[1]] || f.data[1][0], j = f.data[2][m[2]] || f.data[2][0]), R.label != A[1] && (f.data[2] = E[m[0]].children[m[1]].children, m[2] = 0, j = f.data[2][m[2]] || f.data[2][0]), f.checkArr = [B.label, R.label, j.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value, f.data[2][m[2]] ? f.data[2][m[2]].value : f.data[2][0].value], f.resultStr = B.label + R.label + j.label) : (B.label != A[0] && (f.data[1] = E[m[0]].children, m[1] = 0, R = f.data[1][m[1]] || f.data[1][0]), f.checkArr = [B.label, R.label], f.checkValue = [f.data[0][m[0]] ? f.data[0][m[0]].value : f.data[0][0].value, f.data[1][m[1]] ? f.data[1][m[1]].value : f.data[1][0].value], f.resultStr = B.label + R.label);
                break;

              case "region":
                t = f.data.provinces[m[0]] || f.data.provinces[0], e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0]), t.label != A[0] && (f.data.citys = l.default[m[0]] || l.default[0], f.hideArea || (f.data.areas = s.default[m[0]][0] || s.default[0][0]), m[1] = 0, m[2] = 0, e = f.data.citys[m[1]] || f.data.citys[0], f.hideArea || (r = f.data.areas[m[2]] || f.data.areas[0])), e.label == A[1] || f.hideArea || (f.data.areas = s.default[m[0]][m[1]] || s.default[0][0], m[2] = 0, r = f.data.areas[m[2]] || f.data.areas[0]), f.hideArea ? (f.checkArr = [t.label, e.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value], f.resultStr = t.label + e.label) : (f.checkArr = [t.label, e.label, r.label], f.checkValue = [f.data.provinces[m[0]] ? f.data.provinces[m[0]].value : f.data.provinces[0].value, f.data.citys[m[1]] ? f.data.citys[m[1]].value : f.data.citys[0].value, f.data.areas[m[2]] ? f.data.areas[m[2]].value : f.data.areas[0].value], f.resultStr = t.label + e.label + r.label);
                break;

              case "selector":
                f.checkArr = f.data[m[0]] || f.data[f.data.length - 1], f.resultStr = f.data[m[0]] ? f.data[m[0]].label : f.data[f.data.length - 1].label;
                break;
            }

            f.$nextTick(function () {
              f.pickVal = m;
            });
          },
          initData: function initData() {
            var a,
                t,
                e,
                d,
                u,
                i,
                c,
                h,
                o,
                f,
                m,
                y,
                g = this,
                k = {},
                b = g.mode,
                v = [];

            switch (b) {
              case "linkage":
                var p;
                p = g.value ? g.getLinkageVal(g.value, !0) : g.getLinkageVal(g.defaultVal), v = p.dval, k = p.data, g.checkArr = p.checkArr, g.checkValue = p.checkValue, g.resultStr = p.resultStr;
                break;

              case "region":
                v = g.areaCode ? g.getRegionVal(g.areaCode, !0) : g.getRegionVal(g.defaultVal), k = g.hideArea ? {
                  provinces: r.default,
                  citys: l.default[v[0]]
                } : {
                  provinces: r.default,
                  citys: l.default[v[0]],
                  areas: s.default[v[0]][v[1]]
                };
                break;

              case "selector":
                k = g.selectList, v = g.defaultVal;
                break;

              case "limit":
                k = n.default.limit.init(g.dayStep, g.startHour, g.endHour, g.minuteStep, g.afterStep), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              case "limitHour":
                k = n.default.limitHour.init(g.dayStep), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              case "range":
                k = n.default.range.init(g.startYear, g.endYear, g.useCurrent(), g.current), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;

              default:
                k = n.default.date.init(g.startYear, g.endYear, g.mode, g.step, g.useCurrent(), g.current, g.disabledAfter), v = k.defaultVal && g.current ? k.defaultVal : g.defaultVal;
                break;
            }

            switch (g.data = k, b) {
              case "limitHour":
                f = k.date[v[0]] || k.date[k.date.length - 1], m = k.areas[v[2]] || k.areas[k.areas.length - 1], y = k.hours[v[1]] || k.hours[k.hours.length - 1], g.checkArr = [f, m, y], g.resultStr = "".concat(f.value + " " + m.label + " " + y.label + "时");
                break;

              case "limit":
                f = k.date[v[0]] || k.date[k.date.length - 1], m = k.hours[v[1]] || k.hours[k.hours.length - 1], y = k.minutes[v[2]] || k.minutes[k.minutes.length - 1], g.checkArr = [f, m, y], g.resultStr = "".concat(f.value + " " + m.value + ":" + y.value + ":00");
                break;

              case "range":
                var A = k.fyears[v[0]] || k.fyears[k.fyears.length - 1],
                    S = k.fmonths[v[1]] || k.fmonths[k.fmonths.length - 1],
                    V = k.fdays[v[2]] || k.fdays[k.fdays.length - 1],
                    w = k.tyears[v[4]] || k.tyears[k.tyears.length - 1],
                    H = k.tmonths[v[5]] || k.tmonths[k.tmonths.length - 1],
                    D = k.tdays[v[6]] || k.tdays[k.tdays.length - 1];
                g.checkArr = [A, S, V, w, H, D], g.resultStr = "".concat(A + "-" + S + "-" + V + "至" + w + "-" + H + "-" + D);
                break;

              case "half":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], o = k.areas[v[3]] || k.areas[k.areas.length - 1], g.checkArr = [a, t, e, o], g.resultStr = "".concat(a + "-" + t + "-" + e + " " + o.label);
                break;

              case "date":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], g.checkArr = [a, t, e], g.resultStr = "".concat(a + "-" + t + "-" + e);
                break;

              case "yearMonth":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], g.checkArr = [a, t], g.resultStr = "".concat(a + "-" + t);
                break;

              case "dateTime":
                a = k.years[v[0]] || k.years[k.years.length - 1], t = k.months[v[1]] || k.months[k.months.length - 1], e = k.days[v[2]] || k.days[k.days.length - 1], d = k.hours[v[3]] || k.hours[k.hours.length - 1], u = k.minutes[v[4]] || k.minutes[k.minutes.length - 1], i = k.seconds[v[5]] || k.seconds[k.seconds.length - 1], g.resultStr = "".concat(a + "-" + t + "-" + e + " " + d + ":" + u + ":" + i), g.checkArr = [a, t, e, d, u];
                break;

              case "time":
                d = k.hours[v[0]] || k.hours[k.hours.length - 1], u = k.minutes[v[1]] || k.minutes[k.minutes.length - 1], i = k.seconds[v[2]] || k.seconds[k.seconds.length - 1], g.checkArr = [d, u, i], g.resultStr = "".concat(d + ":" + u + ":" + i);
                break;

              case "region":
                c = k.provinces[v[0]], h = k.citys[v[1]], g.hideArea ? (g.checkArr = [c.label, h.label], g.checkValue = [c.value, h.value], g.resultStr = c.label + h.label) : (o = k.areas[v[2]], g.checkArr = [c.label, h.label, o.label], g.checkValue = [c.value, h.value, o.value], g.resultStr = c.label + h.label + o.label);
                break;

              case "selector":
                g.checkArr = k[v[0]] || k[k.length - 1], g.resultStr = k[v[0]].label || k[k.length - 1].label;
                break;
            }

            g.$nextTick(function () {
              g.pickVal = v;
            });
          }
        },
        mounted: function mounted() {
          this.initData();
        }
      };
      t.default = i;
    }).call(this, e("6e42")["default"]);
  },
  bafc: function bafc(a, t, e) {},
  c1180: function c1180(a, t, e) {
    "use strict";

    var r = e("bafc"),
        l = e.n(r);
    l.a;
  },
  fef2: function fef2(a, t, e) {
    "use strict";

    e.r(t);
    var r = e("b8ff"),
        l = e.n(r);

    for (var s in r) {
      "default" !== s && function (a) {
        e.d(t, a, function () {
          return r[a];
        });
      }(s);
    }

    t["default"] = l.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/w-picker/w-picker-create-component', {
  'components/w-picker/w-picker-create-component': function componentsWPickerWPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3395"));
  }
}, [['components/w-picker/w-picker-create-component']]]);
});
require('components/w-picker/w-picker.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0606":function(t,e,n){"use strict";(function(t){n("fae8"),n("921b");i(n("66fd"));var e=i(n("39bc"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2130:function(t,e,n){},"39bc":function(t,e,n){"use strict";n.r(e);var i=n("dc9b"),u=n("66ec");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("f35f");var a=n("2877"),r=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"66ec":function(t,e,n){"use strict";n.r(e);var i=n("b7b4"),u=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=u.a},b7b4:function(t,e,n){"use strict";(function(t,n){var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{order_num:{},pickup:{}}},onLoad:function(e){this.expressAuthList=t.getStorageSync("pickup").authList,this.pickup=t.getStorageSync("pickup").pickup_name,e.pickup&&(this.pickup=e.pickup)},onShow:function(){i=this,this.pickup=this.$tool.getStorageSync("pickup"),i.$tool.getStorageSync("isLogin")?this.getUnclaimednum():t.reLaunch({url:"../login/login"})},methods:{exitUser:function(){console.log(n("exitUser"," at pages\\index\\index.vue:83")),this.$tool.clearAllStorage(),t.navigateTo({url:"../login/login"})},nav_pickup:function(){t.navigateTo({url:"../pickup/pickup"})},toNodelivery:function(e){var n=e.currentTarget.dataset.style;t.navigateTo({url:"/pages/order_list/order_list?style="+n})},toNodelivery2:function(e){t.navigateTo({url:"/pages/order_list/order_list?style=2"})},toRouter:function(e){var n=e.currentTarget.dataset.type;t.navigateTo({url:"/pages/sweep/"+n})},getUnclaimednum:function(){var t=this;t.$http.getUnclaimednum().then(function(e){console.log(n(e," at pages\\index\\index.vue:121")),t.order_num=e.data.result.data})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},dc9b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},f35f:function(t,e,n){"use strict";var i=n("2130"),u=n.n(i);u.a}},[["0606","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0220":function(t,e,n){"use strict";(function(t,n){var u;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{order_num:{},pickup:{}}},onLoad:function(e){this.expressAuthList=t.getStorageSync("pickup").authList,this.pickup=t.getStorageSync("pickup").pickup_name,e.pickup&&(this.pickup=e.pickup)},onShow:function(){u=this,this.pickup=this.$tool.getStorageSync("pickup"),u.$tool.getStorageSync("isLogin")?this.getUnclaimednum():t.reLaunch({url:"../login/login"})},methods:{nav_pickup:function(){t.navigateTo({url:"../pickup/pickup"})},toNodelivery:function(e){var n=e.currentTarget.dataset.style;t.navigateTo({url:"/pages/order_list/order_list?style="+n})},toNodelivery2:function(e){t.navigateTo({url:"/pages/order_list/order_list?style=2"})},toRouter:function(e){var n=e.currentTarget.dataset.type;t.navigateTo({url:"/pages/sweep/"+n})},getUnclaimednum:function(){var t=this;t.$http.getUnclaimednum().then(function(e){console.log(n(e," at pages\\index\\index.vue:109")),t.order_num=e.data.result.data})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"22d3":function(t,e,n){"use strict";var u=n("ea66"),i=n.n(u);i.a},3128:function(t,e,n){"use strict";n.r(e);var u=n("4a8e"),i=n("ef9d");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("22d3");var o=n("2877"),r=Object(o["a"])(i["default"],u["a"],u["b"],!1,null,null,null);e["default"]=r.exports},"4a8e":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i})},ea66:function(t,e,n){},ef9d:function(t,e,n){"use strict";n.r(e);var u=n("0220"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a}},[["0671","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});
require('pages/index/index.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"355f":function(t,e,n){"use strict";n.r(e);var o=n("d234"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},7099:function(t,e,n){"use strict";n.r(e);var o=n("97ca"),i=n("355f");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("99d7");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"097f3dc0",null);e["default"]=s.exports},"97ca":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"99d7":function(t,e,n){"use strict";var o=n("bb04"),i=n.n(o);i.a},bb04:function(t,e,n){},bcc9:function(t,e,n){"use strict";(function(t){n("fae8"),n("921b");o(n("66fd"));var e=o(n("7099"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d234:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,r=n("bd7b");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{infoRes:{},imgUrl:this.$URL.iconURL,title:"login",providerList:[],hasProvider:!1,positionTop:0,psk:"",Ras:""}},onLoad:function(){i=this,this.initPosition(),this.initProvider()},methods:{getUserInfo:function(){var e=this;this.$http.getUserInfo().then(function(n){console.log(t("用户信息",n," at pages\\login\\login.vue:58")),1==n.data.result.has_express||0==n.data.result.has_express?i.$http.getExpressUserInfo().then(function(e){console.log(t("物流信息",e," at pages\\login\\login.vue:62")),i.$tool.setStorageSync("pickup",e.data.result),i.$tool.setStorageSync("oldToken",i.$tool.getTokenStorage()),(0,r.setTokenStorage)(e.data.result.token),i.$tool.setStorageSync("isLogin",!0),o.hideLoading(),o.reLaunch({url:"../index/index"})}):(o.hideLoading(),e.$common.toast("暂无权限登录"))})},onGotUserInfo:function(t){t.detail.rawData?(this.oauth("weixin"),this.$tool.setStorageSync("userInfo",t.detail.rawData)):o.showToast({title:"登录将体验更多功能",icon:"none"})},applogin:function(e){i.$http.appLogin(e).then(function(e){(0,r.setTokenStorage)(e.data.result.token),console.log(t(e," at pages\\login\\login.vue:96")),i.getUserInfo()}).catch(function(e){console.log(t(e," at pages\\login\\login.vue:99"))})},goLogin:function(e){this.$http.getToken(e).then(function(n){if(0==n.data.result.status)(0,r.setTokenStorage)(n.data.result.token),i.getUserInfo();else if(1==n.data.result.status){var o=a({oauthCode:e.code,encrypted_data:i.infoRes.encrypted_data,iv:i.infoRes.iv,signature:i.infoRes.signature,unionid:n.data.result.unionid},e);i.$http.thirdLogin(o).then(function(t){(0,r.setTokenStorage)(t.data.result.token),i.getUserInfo()})}else 2==n.result.status&&(console.log(t(n.data.result.token," at pages\\login\\login.vue:125")),(0,r.setTokenStorage)(n.data.result.token),i.getUserInfo())}).catch(function(e){console.log(t(e," at pages\\login\\login.vue:131"))})},initPosition:function(){this.positionTop=o.getSystemInfoSync().windowHeight-200},initProvider:function(){var e=this,n=["weixin"];o.getProvider({service:"oauth",success:function(t){if(t.provider&&t.provider.length){for(var o=0;o<t.provider.length;o++)~n.indexOf(t.provider[o])&&e.providerList.push({value:t.provider[o],image:"../../static/img/"+t.provider[o]+".png"});e.hasProvider=!0}},fail:function(e){console.error(t("获取服务供应商失败："+JSON.stringify(e)," at pages\\login\\login.vue:159"))}})},oauth:function(e){o.login({provider:e,success:function(t){o.getUserInfo({provider:e,success:function(e){i.infoRes=a({oauthCode:t.code,suffix:"wx",iv:e.iv,encrypted_data:e.encryptedData,signature:e.signature},e.userInfo);var n=e.userInfo;o.showLoading({title:"登录中，请稍等",mask:!0}),n.oauth="app",i.applogin(n)}})},fail:function(e){console.error(t("授权登录失败："+JSON.stringify(e)," at pages\\login\\login.vue:203"))}})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["bcc9","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"14cf":function(t,e,n){"use strict";n.r(e);var o=n("a7c7"),i=n("5f51");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("c17b");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"390a9050",null);e["default"]=s.exports},"5f51":function(t,e,n){"use strict";n.r(e);var o=n("add7"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},a7c7:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},add7:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,r=n("6484");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{infoRes:{},imgUrl:this.$URL.iconURL,title:"login",providerList:[],hasProvider:!1,positionTop:0,psk:"",Ras:""}},onLoad:function(){i=this,this.initPosition(),this.initProvider()},methods:{getUserInfo:function(){var e=this;this.$http.getUserInfo().then(function(n){console.log(t("用户信息",n," at pages\\login\\login.vue:58")),1==n.data.result.has_express?i.$http.getExpressUserInfo().then(function(e){console.log(t("物流信息",e," at pages\\login\\login.vue:62")),i.$tool.setStorageSync("pickup",e.data.result),i.$tool.setStorageSync("oldToken",i.$tool.getTokenStorage()),(0,r.setTokenStorage)(e.data.result.token),i.$tool.setStorageSync("isLogin",!0),o.hideLoading(),o.reLaunch({url:"../index/index"})}):(o.hideLoading(),e.$common.toast("暂无权限登录"))})},onGotUserInfo:function(t){t.detail.rawData?(this.oauth("weixin"),this.$tool.setStorageSync("userInfo",t.detail.rawData)):o.showToast({title:"登录将体验更多功能",icon:"none"})},applogin:function(e){i.$http.appLogin(e).then(function(t){(0,r.setTokenStorage)(t.data.result.token),i.getUserInfo()}).catch(function(e){console.log(t(e," at pages\\login\\login.vue:98"))})},goLogin:function(e){this.$http.getToken(e).then(function(n){if(0==n.data.result.status)(0,r.setTokenStorage)(n.data.result.token),i.getUserInfo();else if(1==n.data.result.status){var o=a({oauthCode:e.code,encrypted_data:i.infoRes.encrypted_data,iv:i.infoRes.iv,signature:i.infoRes.signature,unionid:n.data.result.unionid},e);i.$http.thirdLogin(o).then(function(t){(0,r.setTokenStorage)(t.data.result.token),i.getUserInfo()})}else 2==n.result.status&&(console.log(t(n.data.result.token," at pages\\login\\login.vue:124")),(0,r.setTokenStorage)(n.data.result.token),i.getUserInfo())}).catch(function(e){console.log(t(e," at pages\\login\\login.vue:130"))})},initPosition:function(){this.positionTop=o.getSystemInfoSync().windowHeight-200},initProvider:function(){var e=this,n=["weixin"];o.getProvider({service:"oauth",success:function(t){if(t.provider&&t.provider.length){for(var o=0;o<t.provider.length;o++)~n.indexOf(t.provider[o])&&e.providerList.push({value:t.provider[o],image:"../../static/img/"+t.provider[o]+".png"});e.hasProvider=!0}},fail:function(e){console.error(t("获取服务供应商失败："+JSON.stringify(e)," at pages\\login\\login.vue:158"))}})},oauth:function(e){o.login({provider:e,success:function(t){o.getUserInfo({provider:e,success:function(e){i.infoRes=a({oauthCode:t.code,suffix:"wx",iv:e.iv,encrypted_data:e.encryptedData,signature:e.signature},e.userInfo);var n=e.userInfo;o.showLoading({title:"登录中，请稍等",mask:!0}),n.oauth="app",i.applogin(n)}})},fail:function(e){console.error(t("授权登录失败："+JSON.stringify(e)," at pages\\login\\login.vue:202"))}})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},c118:function(t,e,n){},c17b:function(t,e,n){"use strict";var o=n("c118"),i=n.n(o);i.a}},[["23ca","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});
require('pages/login/login.js');
__wxRoute = 'pages/order_list/order_list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order_list/order_list.js';

define('pages/order_list/order_list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_list/order_list"],{1299:function(e,t,r){"use strict";r.r(t);var n=r("9968"),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},"1fd5":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},"37fb":function(e,t,r){"use strict";r.r(t);var n=r("1fd5"),o=r("1299");for(var a in o)"default"!==a&&function(e){r.d(t,e,function(){return o[e]})}(a);r("f44f");var i=r("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},9968:function(e,t,r){"use strict";(function(e,n){function o(e){return s(e)||i(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"a148"))},l={components:{wPicker:u},data:function(){return{oldSize:0,pageStyle:1,boxOrderNumber:6,numberModelStatus:!1,mode:"range",tabIndex:0,pickerArrayName:"全部",pickerIndex:0,tabList:[{mode:"selector",name:"全部"},{mode:"date",name:"日期选择"}],selectList:[{label:"全部"},{label:"已售后"},{label:"未提货"}],searchValue:"",dateValue:"",selectTime:"选择日期",numberList:[],page:1,page_size:5,boxOrderInfo:[]}},onLoad:function(t){this.pageStyle=t.style,e.setNavigationBarTitle({title:"2"==t.style?"在途中订单":"3"==t.style?"售后到库订单":"未提货订单"})},onShow:function(){this.getNumberBox(),this.searchSubmit()},methods:{showNumberModel:function(){this.numberModelStatus=!0},hideNumberModel:function(){this.numberModelStatus=!1},toggleTab:function(e){this.mode=e.mode,this.$refs[e.mode].show()},onConfirm:function(e){switch(this.pickerArrayName=e.result,e.result){case"全部":this.pickerIndex=0;break;case"已售后":this.pickerIndex=1;break;case"未提货":this.pickerIndex=2;break;default:break}this.page=1,this.page_size=20,this.boxOrderInfo=[],this.searchSubmit(),this.getNumberBox()},onConfirmTime:function(e){this.selectTime=e.result,this.dateValue=this.selectTime,this.page=1,this.page_size=20,this.boxOrderInfo=[],this.searchSubmit(),this.getNumberBox()},searchInput:function(e){console.log(n("输入事件"," at pages\\order_list\\order_list.vue:153")),this.searchValue=e.detail.value},searchCifim:function(){console.log(n("点击确认事件"," at pages\\order_list\\order_list.vue:157"))},onReachBottom:function(){this.searchSubmit(),this.getNumberBox()},goDetail:function(t){var r=t.currentTarget.dataset.orderSn;e.navigateTo({url:"./order_details/order_details?orderSn="+r})},getNumberBox:function(){var e=this,t=new Date(e.dateValue).getTime(),r={key_word:e.searchValue,search_time:t,unclaimed_status:Number(e.pickerIndex),list_type:Number(e.pageStyle)};e.$http.getUnclaimedGoodsInfo(r).then(function(t){var r=t.data;e.numberList=r.result.boxGoodsInfo})},searchSubmit:function(){var t=this,r=new Date(t.dateValue).getTime(),n={key_word:t.searchValue,page:t.page,page_size:t.page_size,search_time:r,unclaimed_status:Number(t.pickerIndex),list_type:Number(t.pageStyle)};t.$http.getUnclaimedInfo(n).then(function(r){var n=r.data;n.result.boxOrderInfo.length>0?(n.result.boxOrderInfo.length!==t.page_size&&(t.oldSize=n.result.boxOrderInfo.length),t.page+=1,t.boxOrderInfo=[].concat(o(t.boxOrderInfo),o(n.result.boxOrderInfo)),t.boxOrderNumber=n.result.count):e.showToast({icon:"none",title:"没有更多了",duration:500})})}}};t.default=l}).call(this,r("6e42")["default"],r("0de9")["default"])},ae1c:function(e,t,r){"use strict";(function(e){r("fae8"),r("921b");n(r("66fd"));var t=n(r("37fb"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},f44f:function(e,t,r){"use strict";var n=r("ff67"),o=r.n(n);o.a},ff67:function(e,t,r){}},[["ae1c","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_list/order_list"],{"2c0f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a})},bb31:function(e,t,r){},cb47:function(e,t,r){"use strict";r.r(t);var n=r("e3a0"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},ccbf:function(e,t,r){"use strict";r.r(t);var n=r("2c0f"),a=r("cb47");for(var i in a)"default"!==i&&function(e){r.d(t,e,function(){return a[e]})}(i);r("f10a");var o=r("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},e3a0:function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"3395"))},i={components:{wPicker:a},data:function(){return{pageStyle:1,boxOrderNumber:6,numberModelStatus:!1,mode:"range",tabIndex:0,pickerArrayName:"全部",pickerIndex:0,tabList:[{mode:"selector",name:"全部"},{mode:"date",name:"日期选择"}],selectList:[{label:"全部"},{label:"已售后"},{label:"未提货"}],searchValue:"",dateValue:"",selectTime:"选择日期",numberList:[],page:1,page_size:20,boxOrderInfo:[]}},onLoad:function(t){this.pageStyle=t.style,e.setNavigationBarTitle({title:"2"==t.style?"在途中订单":"3"==t.style?"售后到库订单":"未提货订单"})},onShow:function(){this.getNumberBox(),this.searchSubmit()},methods:{showNumberModel:function(){this.numberModelStatus=!0},hideNumberModel:function(){this.numberModelStatus=!1},toggleTab:function(e){this.mode=e.mode,this.$refs[e.mode].show()},onConfirm:function(e){switch(this.pickerArrayName=e.result,e.result){case"全部":this.pickerIndex=0;break;case"已售后":this.pickerIndex=1;break;case"未提货":this.pickerIndex=2;break;default:break}this.page=1,this.page_size=20,this.boxOrderInfo=[],this.searchSubmit(),this.getNumberBox()},onConfirmTime:function(e){this.selectTime=e.result,this.dateValue=this.selectTime,this.page=1,this.page_size=20,this.boxOrderInfo=[],this.searchSubmit(),this.getNumberBox()},searchInput:function(e){console.log(n("输入事件"," at pages\\order_list\\order_list.vue:152")),this.searchValue=e.detail.value},searchCifim:function(){console.log(n("点击确认事件"," at pages\\order_list\\order_list.vue:156"))},onReachBottom:function(){e.showToast({icon:"none",title:"没有更多了",duration:500})},goDetail:function(t){var r=t.currentTarget.dataset.orderSn;e.navigateTo({url:"./order_details/order_details?orderSn="+r})},getNumberBox:function(){var e=this,t=new Date(e.dateValue).getTime(),r={key_word:e.searchValue,search_time:t,unclaimed_status:Number(e.pickerIndex),list_type:Number(e.pageStyle)};e.$http.getUnclaimedGoodsInfo(r).then(function(t){var r=t.data;e.numberList=r.result.boxGoodsInfo})},searchSubmit:function(){var e=this,t=new Date(e.dateValue).getTime(),r={key_word:e.searchValue,page:e.page,page_size:e.page_size,search_time:t,unclaimed_status:Number(e.pickerIndex),list_type:Number(e.pageStyle)};e.$http.getUnclaimedInfo(r).then(function(t){var r=t.data;e.boxOrderInfo=r.result.boxOrderInfo,e.boxOrderNumber=r.result.count})}}};t.default=i}).call(this,r("6e42")["default"],r("0de9")["default"])},f10a:function(e,t,r){"use strict";var n=r("bb31"),a=r.n(n);a.a}},[["1125","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});
require('pages/order_list/order_list.js');
__wxRoute = 'pages/pickup/pickup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pickup/pickup.js';

define('pages/pickup/pickup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pickup/pickup"],{1315:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"3fea":function(t,e,n){"use strict";n.r(e);var i=n("1315"),o=n("de77");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);var u=n("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"a4643226",null);e["default"]=a.exports},"5f5c":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/directory/phone-directory").then(n.bind(null,"5e45"))},c={data:function(){return{newCitys:{},phones:{}}},components:{directory:o},onLoad:function(){this.getList()},methods:{paramClick:function(e){console.log(t(e," at pages\\pickup\\pickup.vue:24"));var n=this.$tool.getStorageSync("pickup"),o=e.cityname,c=e.pickup_id;e.pinyin,e.py;n.pickup_name=o,n.pickup_id=c,this.$tool.setStorageSync("pickup",n),i.navigateBack()},getList:function(){var e=this,n=this,i={};n.$http.getPickupList({}).then(function(o){console.log(t(o.data.result.cities," at pages\\pickup\\pickup.vue:42")),n.phones=n.$tool.sortData(o.data.result.cities,"py"),console.log(t(n.phones," at pages\\pickup\\pickup.vue:44")),n.phones.forEach(function(t){i[t.letter]=t.list}),e.phones=i})}}};e.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},de77:function(t,e,n){"use strict";n.r(e);var i=n("5f5c"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=o.a}},[["27af","common/runtime","common/vendor"]]]);
});
require('pages/pickup/pickup.js');
__wxRoute = 'pages/sweep/user_fetch';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sweep/user_fetch.js';

define('pages/sweep/user_fetch.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sweep/user_fetch"],{"0071":function(t,n,e){"use strict";(function(t){e("fae8"),e("921b");u(e("66fd"));var n=u(e("2b2a"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"0319":function(t,n,e){"use strict";e.r(n);var u=e("3142"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a},1152:function(t,n,e){},"2b2a":function(t,n,e){"use strict";e.r(n);var u=e("a0ff"),i=e("0319");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("cf6b");var o=e("2877"),s=Object(o["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=s.exports},3142:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{text:"该订单未进行确认收货，是否确认收货",isShow:!1,inputValue:""}},methods:{showConfig:function(t){this.isShow=!0,this.inputValue=t},hideConfig:function(){this.inputValue="",this.isShow=!1},fail:function(t){this.isShow=!1,this.inputValue=""},succer:function(t){this.submit()},deliveryInput:function(t){this.inputValue=t.detail.value},submit:function(){if(this.inputValue){var n=this;t.navigateTo({url:"/pages/userOrderDetile/userOrderDetile?orderSn="+n.inputValue}),n.inputValue=""}else this.$common.toast("请填写完整的提货码")},scanCode:function(){var n=this;t.scanCode({onlyFromCamera:!0,success:function(t){n.inputValue=t.result,n.submit()}})}}};n.default=e}).call(this,e("6e42")["default"])},a0ff:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})},cf6b:function(t,n,e){"use strict";var u=e("1152"),i=e.n(u);i.a}},[["0071","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sweep/user_fetch"],{7387:function(t,n,e){"use strict";e.r(n);var u=e("b5f9"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},a474:function(t,n,e){"use strict";e.r(n);var u=e("c9d1"),a=e("7387");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("b68d");var i=e("2877"),o=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},a96a:function(t,n,e){},b5f9:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{inputValue:""}},methods:{deliveryInput:function(t){this.inputValue=t.detail.value},submit:function(){var n=this;t.navigateTo({url:"/pages/userOrderDetile/userOrderDetile?orderSn="+n.inputValue}),n.inputValue=""},scanCode:function(){var n=this;t.scanCode({onlyFromCamera:!0,success:function(t){n.inputValue=t.result,n.submit()}})}}};n.default=e}).call(this,e("6e42")["default"])},b68d:function(t,n,e){"use strict";var u=e("a96a"),a=e.n(u);a.a},c9d1:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})}},[["275a","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});
require('pages/sweep/user_fetch.js');
__wxRoute = 'pages/sweep/affirm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sweep/affirm.js';

define('pages/sweep/affirm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sweep/affirm"],{"18a5":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return a})},6774:function(t,n,o){"use strict";var e=o("b9af"),a=o.n(e);a.a},"6dfa":function(t,n,o){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{itemList:[],inputValue:""}},onLoad:function(){},onShow:function(){this.getboxlist()},methods:{scanCode:function(){var n=this;t.scanCode({onlyFromCamera:!0,success:function(t){console.log(o(t," at pages\\sweep\\affirm.vue:50")),n.confirmbox(t.result)}})},getboxlist:function(){var t=this;t.$http.getboxlist().then(function(n){var o=n.data;1==o.success?t.itemList=o.result.box_group_list:t.$common.toast(o.msg)})},arrivalInput:function(t){var n=this,e=t.detail.value,a=/^[a-zA-Z]{2}\d{7}[a-zA-Z]{1}\d{2}$/;console.log(o(a.test(e)," at pages\\sweep\\affirm.vue:73"));var i="中转箱码为："+e,s="确认";12!=e.length||0!=a.test(e)?12!=e.length||1!=a.test(e)||n.$common.showModal(i,s,function(t){t.confirm&&n.confirmbox(e)}):n.$common.toast("请输入正确的提货箱码")},confirmbox:function(t){var n=this,e={box_sn:t};n.$http.getConfirmbox(e).then(function(t){var e=t.data;console.log(o(e," at pages\\sweep\\affirm.vue:98")),n.$common.toast(e.msg),n.inputValue="",1==e.success&&n.getboxlist()})},goArrivalOrder:function(t,n){if(2!=t){var o=this;o.$common.showModal("箱子是否已经到达自提点？","确定",function(t){t.confirm&&(o.confirmbox(n),o.getboxlist())})}}}};n.default=e}).call(this,o("6e42")["default"],o("0de9")["default"])},b9af:function(t,n,o){},c565:function(t,n,o){"use strict";o.r(n);var e=o("18a5"),a=o("c776");for(var i in a)"default"!==i&&function(t){o.d(n,t,function(){return a[t]})}(i);o("6774");var s=o("2877"),u=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports},c776:function(t,n,o){"use strict";o.r(n);var e=o("6dfa"),a=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);n["default"]=a.a}},[["f0d0","common/runtime","common/vendor"]]]);
});
require('pages/sweep/affirm.js');
__wxRoute = 'pages/sweep/invite';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sweep/invite.js';

define('pages/sweep/invite.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sweep/invite"],{2070:function(t,e,n){"use strict";n.r(e);var i=n("ae12"),u=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=u.a},"30fc":function(t,e,n){},5935:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},"85c9":function(t,e,n){"use strict";var i=n("30fc"),u=n.n(i);u.a},ae12:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"是否确认核销？",isShow:!1,text:"",inputValue:""}},methods:{fail:function(e){this.isShow=!1,t.showToast({title:"已取消",icon:"none",duration:2e3})},succer:function(e){var i=this;i.isShow=!1,t.showLoading({title:"销毁中..."});var u={invite_code:i.inputValue};i.$http.getInvitation(u).then(function(e){t.hideLoading(),console.log(n(e," at pages\\sweep\\invite.vue:48"));var u=e.data;t.showToast({title:u.msg,icon:"none",duration:2e3}),i.inputValue=""})},deliveryInput:function(t){this.inputValue=t.detail.value},submit:function(){var t=this;t.inputValue&&(this.isShow=!0,this.text="邀请码："+t.inputValue)},scanCode:function(){var e=this;t.scanCode({onlyFromCamera:!0,success:function(t){e.inputValue=t.result,e.submit()}})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},be05:function(t,e,n){"use strict";(function(t){n("fae8"),n("921b");i(n("66fd"));var e=i(n("ecd0"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ecd0:function(t,e,n){"use strict";n.r(e);var i=n("5935"),u=n("2070");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n("85c9");var o=n("2877"),c=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports}},[["be05","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sweep/invite"],{"1e0e":function(n,e,t){"use strict";t.r(e);var u=t("6c83"),c=t.n(u);for(var o in u)"default"!==o&&function(n){t.d(e,n,function(){return u[n]})}(o);e["default"]=c.a},"276c":function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},c=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return c})},"2fae":function(n,e,t){"use strict";var u=t("c9ed"),c=t.n(u);c.a},"5cec":function(n,e,t){"use strict";t.r(e);var u=t("276c"),c=t("1e0e");for(var o in c)"default"!==o&&function(n){t.d(e,n,function(){return c[n]})}(o);t("2fae");var i=t("2877"),a=Object(i["a"])(c["default"],u["a"],u["b"],!1,null,null,null);e["default"]=a.exports},"6c83":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{inputValue:""}},methods:{deliveryInput:function(n){this.inputValue=n.detail.value},submit:function(){var e=this;n.showModal({title:"是否确定核销？",content:"邀请码："+e.inputValue,confirmText:"确定",confirmColor:"#eb3c39",cancelText:"取消",cancelColor:"#030303",success:function(t){if(t.confirm)e.inputValue;else n.showToast({title:"已取消",icon:"none",duration:2e3})}})},scanCode:function(){var e=this;n.scanCode({onlyFromCamera:!0,success:function(n){e.inputValue=n.result,e.submit()}})}}};e.default=t}).call(this,t("6e42")["default"])},c9ed:function(n,e,t){}},[["9218","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});
require('pages/sweep/invite.js');
__wxRoute = 'pages/order_list/order_details/order_details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order_list/order_details/order_details.js';

define('pages/order_list/order_details/order_details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_list/order_details/order_details"],{"4e23":function(e,t,n){},"74eb":function(e,t,n){"use strict";(function(e){n("fae8"),n("921b");o(n("66fd"));var t=o(n("beaf"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7d66":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"82ec":function(e,t,n){"use strict";var o=n("4e23"),r=n.n(o);r.a},beaf:function(e,t,n){"use strict";n.r(t);var o=n("7d66"),r=n("bf7d");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("82ec");var c=n("2877"),i=Object(c["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},bf7d:function(e,t,n){"use strict";n.r(t);var o=n("ec70"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},ec70:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{orderSn:0,orderDetailInfo:{}}},onLoad:function(e){this.orderSn=e.orderSn},onShow:function(){this.getDetailInfo()},methods:{copy:function(t){var n=this;e.setClipboardData({data:t,success:function(){n.$common.toast("复制成功")}})},call:function(t){e.makePhoneCall({phoneNumber:"18188902961",success:function(e){console.log(n(e," at pages\\order_list\\order_details\\order_details.vue:75"))}})},getDetailInfo:function(){var t=this,n={order_sn:t.orderSn};t.$http.getOrderDetail(n).then(function(n){var o=n.data;1==o.success?t.orderDetailInfo=o.result:e.showToast({title:o.msg,icon:"none",duration:2e3})})},onBack:function(){var t=this;e.showModal({title:"",content:"是否商品已清点完成，即将带回仓库",confirmColor:"#eb3c39",cancelText:"取消",confirmText:"确定",cancelColor:"#030303",success:function(o){if(console.log(n(o," at pages\\order_list\\order_details\\order_details.vue:110")),o.confirm){var r={order_sn:t.orderSn};t.$http.getWarehouse(r).then(function(n){var o=n.data;1==o.success?t.getDetailInfo():e.showToast({title:o.msg,icon:"none",duration:2e3})})}}})}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["74eb","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_list/order_details/order_details"],{"085f":function(t,n,e){"use strict";e.r(n);var o=e("8d70"),r=e("a3ac");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("2f36");var i=e("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},2506:function(t,n,e){},"2f36":function(t,n,e){"use strict";var o=e("2506"),r=e.n(o);r.a},"8d70":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},a3ac:function(t,n,e){"use strict";e.r(n);var o=e("f9cb"),r=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=r.a},f9cb:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{orderSn:0,orderDetailInfo:{}}},onLoad:function(t){this.orderSn=t.orderSn},onShow:function(){this.getDetailInfo()},methods:{getDetailInfo:function(){var n=this,e={order_sn:n.orderSn};n.$http.getOrderDetail(e).then(function(e){var o=e.data;1==o.success?n.orderDetailInfo=o.result:t.showToast({title:o.msg,icon:"none",duration:2e3})})},onBack:function(){var n=this;t.showModal({title:"",content:"是否商品已清点完成，即将带回仓库",confirmColor:"#eb3c39",cancelText:"取消",confirmText:"确定",cancelColor:"#030303",success:function(o){if(console.log(e(o," at pages\\order_list\\order_details\\order_details.vue:92")),o.confirm){var r={order_sn:n.orderSn};n.$http.getWarehouse(r).then(function(e){var o=e.data;1==o.success?n.getDetailInfo():t.showToast({title:o.msg,icon:"none",duration:2e3})})}}})}}};n.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["b339","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});
require('pages/order_list/order_details/order_details.js');
__wxRoute = 'pages/userOrderDetile/orderList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userOrderDetile/orderList.js';

define('pages/userOrderDetile/orderList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userOrderDetile/orderList"],{"00e6":function(e,n,t){"use strict";var u=t("d483"),a=t.n(u);a.a},"41f1":function(e,n,t){"use strict";t.r(n);var u=t("c115"),a=t("5ef9");for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);t("00e6");var f=t("2877"),o=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,"1ae9ac09",null);n["default"]=o.exports},"5ef9":function(e,n,t){"use strict";t.r(n);var u=t("b187"),a=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);n["default"]=a.a},"64f4":function(e,n,t){"use strict";(function(e){t("fae8"),t("921b");u(t("66fd"));var n=u(t("41f1"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},b187:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{list:[{sku_img:"sasafsafs",goods_name:"薄荷口香糖",spec_key_name:"卑微name",goods_price:"188.88",goods_num:2}]}}};n.default=u},c115:function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return a})},d483:function(e,n,t){}},[["64f4","common/runtime","common/vendor"]]]);
});
require('pages/userOrderDetile/orderList.js');
__wxRoute = 'pages/userOrderDetile/userOrderDetile';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userOrderDetile/userOrderDetile.js';

define('pages/userOrderDetile/userOrderDetile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userOrderDetile/userOrderDetile"],{"0b02":function(t,e,n){},"155a":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{isFail:!1,text2:"",isShow2:!1,text:"是否确认收货",isShow:!1,orderSn:"",orderInfo:{}}},onLoad:function(t){this.orderSn=t.orderSn,this.orderSn&&this.$tool.getRouter(2).showConfig(this.orderSn)},onShow:function(){this.getOrder()},methods:{fail:function(){this.isShow=!1},succer:function(){var e=this;e.$http.getConfirmOrder(data).then(function(r){var o=r.data;if(e.$tool.getRouter(2).hideConfig(),1!=o.success)return e.$common.toast(o.msg),void setTimeout(function(){n.navigateTo()},200);e.getOrder(),console.log(t(o," at pages\\userOrderDetile\\userOrderDetile.vue:87")),e.$common.toast(o.msg)})},succer2:function(){n.navigateBack()},getOrder:function(){var t=this,e={order_sn:t.orderSn};t.$http.getOrder(e).then(function(e){var n=e.data;1==n.success?t.orderInfo=n.result:(t.text2=n.msg,t.isShow2=!0)})},submit:function(){var t=this;t.orderInfo.order_sn;t.text="是否确认提货？",t.isShow=!0}}};e.default=r}).call(this,n("0de9")["default"],n("6e42")["default"])},6614:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"702a":function(t,e,n){"use strict";var r=n("0b02"),o=n.n(r);o.a},8845:function(t,e,n){"use strict";n.r(e);var r=n("6614"),o=n("f1ae");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("702a");var i=n("2877"),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},ae0e:function(t,e,n){"use strict";(function(t){n("fae8"),n("921b");r(n("66fd"));var e=r(n("8845"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f1ae:function(t,e,n){"use strict";n.r(e);var r=n("155a"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=o.a}},[["ae0e","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userOrderDetile/userOrderDetile"],{"328c":function(n,t,e){"use strict";e.r(t);var r=e("c53d"),o=e("8628");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("7fb5");var a=e("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},"45d1":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{orderSn:"",orderInfo:{}}},onLoad:function(n){this.orderSn=n.orderSn},onShow:function(){this.getOrder()},methods:{getOrder:function(){var t=this,e={order_sn:t.orderSn};t.$http.getOrder(e).then(function(e){var r=e.data;if(1==r.success)t.orderInfo=r.result;else{var o=r.msg,u="确定";t.$common.showModal(o,u,function(t){n.navigateBack({delta:1})})}})},submit:function(){var n=this,t={order_sn:n.orderInfo.order_sn};n.$common.showModal("是否确认提货？","确定",function(e){e.confirm&&n.$http.getConfirmOrder(t).then(function(t){var e=t.data;1==e.success?(n.getOrder(),n.$common.toast(e.msg)):n.$common.toast(e.msg)})})}}};t.default=e}).call(this,e("6e42")["default"])},"7fb5":function(n,t,e){"use strict";var r=e("87de"),o=e.n(r);o.a},8628:function(n,t,e){"use strict";e.r(t);var r=e("45d1"),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,function(){return r[n]})}(u);t["default"]=o.a},"87de":function(n,t,e){},c53d:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o})}},[["fe7a","common/runtime","common/vendor"]]]);
>>>>>>> 4fc0aa52b24c17713d2d8771be5ce75eaac65d72
});
require('pages/userOrderDetile/userOrderDetile.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

