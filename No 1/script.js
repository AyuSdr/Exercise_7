  const pekerjaanIt = ['Software Engineer', 'Back End Developer', 'AI Engineer', 'Data Scientist', 'UI / UX Designer', 
'Mobile Developer', 'Android Developer', 'Cloud Engineer', 'Game Developer', 'Web Developer'];

document.write('Pekerjaan Di Bidang IT : <br> ');
document.write('<ol>');
pekerjaanIt.forEach(pekerjaan => {
document.write(`<li> ${pekerjaan} </li>`);
});
document.write('</ol>');
document.write(`Banyak Data : ${pekerjaanIt.length}`)