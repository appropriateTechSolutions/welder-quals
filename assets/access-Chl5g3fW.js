const s=new Set(["admin","responsible","wqms"]),r=e=>s.has(e.role),n=e=>r(e)&&!e.read_only;export{n as c,r as i};
