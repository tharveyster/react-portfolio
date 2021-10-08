(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),r=n.n(a),s=(n(9),n(2)),i=n(0);function l(){return Object(i.jsx)("h1",{className:"title",children:"Todd Harvey"})}function o(){return Object(i.jsxs)("footer",{children:[Object(i.jsx)("a",{className:"footerLink",href:"https://github.com/tharveyster",rel:"noreferrer",target:"_blank",children:"GitHub"}),Object(i.jsx)("a",{className:"footerLink",href:"https://www.linkedin.com/in/todd-harvey-147410b5/",rel:"noreferrer",target:"_blank",children:"LinkedIn"}),Object(i.jsx)("a",{className:"footerLink",href:"https://www.facebook.com/todd.harvey.3323",rel:"noreferrer",target:"_blank",children:"Facebook"})]})}function j(e){var t=e.currentPage,n=e.handlePageChange;return Object(i.jsxs)("ul",{className:"navbar",children:[Object(i.jsx)("li",{className:"navItem",children:Object(i.jsx)("a",{href:"#about",onClick:function(){return n("About Me")},className:"About Me"===t?"nav-link active":"nav-link",children:"About Me"})}),Object(i.jsx)("li",{className:"navItem",children:Object(i.jsx)("a",{href:"#projects",onClick:function(){return n("Projects")},className:"Projects"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(i.jsx)("li",{className:"navItem",children:Object(i.jsx)("a",{href:"#contact",onClick:function(){return n("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})}),Object(i.jsx)("li",{className:"navItem",children:Object(i.jsx)("a",{href:"#resume",onClick:function(){return n("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})})]})}var d=n.p+"static/media/todd.c32d7d1b.jpg";function b(){return Object(i.jsxs)("div",{className:"about",children:[Object(i.jsx)("h2",{children:"About Me"}),Object(i.jsx)("img",{className:"picture",src:d,alt:"Todd Harvey"}),Object(i.jsx)("p",{children:'Full stack web developer with a strong interest in all things web-related. Earned a Certificate in Full Stack Web Development from Johns Hopkins University. Strong understanding of HTML, CSS, and APIs (web, third-party, and server-side), with a working knowledge of Javascript, jQuery, Bootstrap, Node.js, React.js, MySQL, MongoDB, and PHP. Constantly looking for ways to improve existing projects, in appearance, functionality, and user experience, and strive to stay current with the technologies in this ever-changing field. As an eager learner and natural "helper", I am excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and continue to develop innovative, and exciting work.'})]})}function h(){return Object(i.jsx)("h3",{children:"Test"})}function u(){return Object(i.jsxs)("div",{className:"work",children:[Object(i.jsx)("h2",{children:"Portfolio"}),Object(i.jsx)(h,{})]})}function m(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function O(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),l=Object(s.a)(r,2),o=l[0],j=l[1],d=Object(c.useState)(""),b=Object(s.a)(d,2),h=b[0],u=b[1],O=Object(c.useState)(""),x=Object(s.a)(O,2),f=x[0],v=x[1],g=function(e){var t=e.target,n=t.name,c=t.value;"name"===n?a(c):"email"===n?j(c):u(c)},p=function(e){var t=e.target,n=t.name,c=t.value;"name"===n?c.length||v("The name field is required"):"email"===n?(m(c)?v(""):v("Email is invalid"),c.length||v("The email field is required")):c.length||v("The message field is required")};return Object(i.jsxs)("div",{className:"contactForm",children:[Object(i.jsx)("h2",{children:"Contact"}),Object(i.jsxs)("form",{className:"form",children:[Object(i.jsxs)("label",{children:["Name:",Object(i.jsx)("input",{className:"form-field",value:n,name:"name",onBlur:p,onChange:g,type:"text",placeholder:"Name"})]}),Object(i.jsxs)("label",{children:["Email:",Object(i.jsx)("input",{className:"form-field",value:o,name:"email",onBlur:p,onChange:g,type:"email",placeholder:"Email"})]}),Object(i.jsxs)("label",{children:["Message:",Object(i.jsx)("textarea",{className:"form-field",value:h,name:"message",onBlur:p,onChange:g,placeholder:"Message"})]}),f&&Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"error-text",children:f})}),Object(i.jsx)("button",{className:"btn",type:"button",onClick:function(e){e.preventDefault(),m(o)?(a(""),j(""),u(""),v("")):v("Email is invalid")},children:"Submit"})]})]})}var x=n.p+"static/media/todd-harvey-resume.8bba02f8.pdf";function f(){return Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("h2",{children:"Resume"}),Object(i.jsxs)("p",{children:["My resume can be ",Object(i.jsx)("a",{className:"resume-link",href:x,rel:"noreferrer",target:"_blank",children:"downloaded here"}),"."]}),Object(i.jsx)("h3",{children:"Frontend Proficiencies"}),Object(i.jsxs)("ul",{className:"skillList",children:[Object(i.jsx)("li",{children:"HTML"}),Object(i.jsx)("li",{children:"CSS"}),Object(i.jsx)("li",{children:"JavaScript"}),Object(i.jsx)("li",{children:"JQuery"}),Object(i.jsx)("li",{children:"Bootstrap"}),Object(i.jsx)("li",{children:"React"})]}),Object(i.jsx)("h3",{children:"Backend Proficiencies"}),Object(i.jsxs)("ul",{className:"skillList",children:[Object(i.jsx)("li",{children:"Node"}),Object(i.jsx)("li",{children:"Express"}),Object(i.jsx)("li",{children:"MySQL, Sequelize"}),Object(i.jsx)("li",{children:"MongoDB, Mongoose"}),Object(i.jsx)("li",{children:"APIs"}),Object(i.jsx)("li",{children:"PHP"})]})]})}function v(){var e=Object(c.useState)("About Me"),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{currentPage:n,handlePageChange:function(e){return a(e)}}),Object(i.jsx)(l,{}),"About Me"===n?Object(i.jsx)(b,{}):"Projects"===n?Object(i.jsx)(u,{}):"Contact"===n?Object(i.jsx)(O,{}):Object(i.jsx)(f,{}),Object(i.jsx)(o,{})]})}n(11);var g=function(){return Object(i.jsx)(v,{})};r.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.73d6a4e9.chunk.js.map