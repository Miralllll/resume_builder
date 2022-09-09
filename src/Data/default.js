const defaultTM = `
\\documentclass[a4paper]{article}
\\usepackage{fullpage}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{textcomp}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{ifthen}
\\usepackage{amsmath} %\\text{} command needs this package
\\usepackage{pgffor}
\\usepackage{hyperref}
\\textheight=10in
\\pagestyle{empty}
\\raggedright


% The beginning of the variable list

% From here to the next the end of the list you can see all the %
% that are used in this resume templete. %
% You have a freedom to modify the values of variables from here if you wish %
% or from the form that is offerred by this website. %
% If you will new variables different from those that we offered, you need %
% to insert their values from here (forms can not offer you that yet) %

\\newcommand{\\englishname}{}
\\newcommand{\\headline}{}
\\newcommand{\\email}{}
\\newcommand{\\mobilecontact}{}
\\newcommand{\\media}{}
\\newcommand{\\mediafield}{}

% WORK EXPERIENCE
\\newcommand\\worknames{
}
\\newcommand\\workpositions{
}
\\newcommand\\workstartdates{
}
\\newcommand\\workenddates{
}
\\newcommand\\workwebsites{
}
\\newcommand\\worksummarys{
}
% EDUCATION
\\newcommand\\institutionnames{
}
\\newcommand\\degrees{
}
\\newcommand\\areaofstudys{
}
\\newcommand\\grades{
}
\\newcommand\\institutionstartdates{
}
\\newcommand\\institutionenddates{
}
\\newcommand\\institutionwebsites{
}
\\newcommand\\institutionsummarys{
}
% PROJECTS
\\newcommand\\projectnames{
}
\\newcommand\\projectdescriptions{
}
\\newcommand\\projectstartdates{
}
\\newcommand\\projectenddates{
}
\\newcommand\\projectwebsites{
}
\\newcommand\\projectsummarys{
}

% AWARDS
\\newcommand\\awardnames{
}

\\newcommand\\awarddescriptions{
}

\\newcommand\\awarddates{
}

\\newcommand\\awardwebsites{
}

\\newcommand\\awardsummarys{
}

% SKILLS
\\newcommand\\skillnames{
}

\\newcommand\\skilllevels{

}

\\newcommand\\skillexplaineds{
}




% The end of variables

\\def\\bull{\\vrule height 0.8ex width .7ex depth -.1ex }

% DEFINITIONS FOR RESUME %%%%%%%%%%%%%%%%%%%%%%%

\\newcommand{\\area} [2] {
\\vspace*{-9pt}
\\begin{verse}
    \\textbf{#1}   #2
\\end{verse}
}

\\newcommand{\\lineunder} {
\\vspace*{-8pt} \\\\
\\hspace*{-18pt} \\hrulefill \\\\
}

\\newcommand{\\header} [1] {
{\\hspace*{-18pt}\\vspace*{6pt} \\textsc{#1}}
\\vspace*{-6pt} \\lineunder
}

\\newcommand{\\employer} [3] {
{ \\textbf{#1} (#2)\\\\ \\underline{\\textbf{\\emph{#3}}}\\\\  }
}

\\newcommand{\\contact} [3] {
\\vspace*{-10pt}
\\begin{center}
    {\\Huge \\scshape {#1}}\\\\
    #2 \\\\ #3
\\end{center}
\\vspace*{-8pt}
}

\\newenvironment{achievements}{
\\begin{list}
    {$\\bullet$}{\\topsep 0pt \\itemsep -2pt}}{\\vspace*{4pt}
\\end{list}
}

\\newcommand{\\schoolwithcourses} [4] {
\\textbf{#1} #2 $\\bullet$ #3\\\\
#4 \\\\
\\vspace*{5pt}
}

\\newcommand{\\school} [4] {
\\textbf{#1} #2 $\\bullet$ #3\\\\
#4 \\\\
}
% END RESUME DEFINITIONS %%%%%%%%%%%%%%%%%%%%%%%

\\begin{document}
\\vspace*{-40pt}





%==== Profile ====%
\\vspace*{-10pt}
\\begin{center}
{\\Huge \\scshape \\englishname}\\\\
\\vspace{2mm}
\\headline \\\\
\\vspace{1mm}
{\\email {}} 
$\\cdot$ 
{\\mobilecontact} 
$\\cdot$
\\href{\\mediafield}{\\textbf{{\\media} }} 
\\end{center}

\\vspace{4mm}


%==== Work Experience ====%
\\header{Working Experience}
\\vspace{2mm}
\\foreach \\workname [count=\\xworkname] in \\worknames {
\\foreach \\workposition [count=\\xworkposition] in \\workpositions {
\\ifnum\\xworkname=\\xworkposition
\\foreach \\workstartdate [count=\\xworkstartdate] in \\workstartdates {
\\ifnum\\xworkname=\\xworkstartdate
\\foreach \\workenddate [count=\\xworkenddate] in \\workenddates {
\\ifnum\\xworkname=\\xworkenddate
\\foreach \\workwebsite [count=\\xworkwebsite] in \\workwebsites {
\\ifnum\\xworkname=\\xworkwebsite
\\foreach \\worksummary [count=\\xworksummary] in \\worksummarys {
\\ifnum\\xworkname=\\xworksummary
%     %%%%%%%%%%%%%%%%%%%%
  \\vspace{4mm}
  \\href{\\workwebsite}{\\textbf{{\\workname} }} 
  \\hfill {\\workstartdate}  
    - {\\workenddate} \\\\
%     % \\hfill Georgia, Tbilisi
%     \\\\
  \\textit{{\\workposition} } \\\\
  \\vspace{1mm}
  
    \\begin{itemize} \\itemsep 1pt
        {\\worksummary} 
    \\end{itemize}
  \\vspace{4mm}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
}


%==== Education ====%
\\header{Education}
\\vspace{2mm}
\\foreach \\institutionname [count=\\xinstitutionname] in \\institutionnames {
\\foreach \\areaofstudy [count=\\xareaofstudy] in \\areaofstudys {
\\ifnum\\xinstitutionname=\\xareaofstudy
\\foreach \\institutionstartdate [count=\\xinstitutionstartdate] in \\institutionstartdates {
\\ifnum\\xinstitutionname=\\xinstitutionstartdate
\\foreach \\institutionenddate [count=\\xinstitutionenddate] in \\institutionenddates {
\\ifnum\\xinstitutionname=\\xinstitutionenddate
\\foreach \\institutionwebsite [count=\\xinstitutionwebsite] in \\institutionwebsites {
\\ifnum\\xinstitutionname=\\xinstitutionwebsite
\\foreach \\degree [count=\\xdegree] in \\degrees {
\\ifnum\\xinstitutionname=\\xdegree
\\foreach \\grade [count=\\xgrade] in \\grades {
\\ifnum\\xinstitutionname=\\xgrade
\\foreach \\institutionsummary [count=\\xinstitutionsummary] in \\institutionsummarys {
\\ifnum\\xinstitutionname=\\xinstitutionsummary
%   \\noindent \\institutionname{} \\institutionsummary\\par
    %%%%%%%%%%%%%%%%%%%%
    \\vspace{4mm}
    \\href{\\institutionwebsite}{\\textbf{{\\institutionname} }} 
    \\hfill {\\institutionstartdate}  
    - {\\institutionenddate} \\\\
    % \\hfill Georgia, Tbilisi
    {\\degree} Degree of {\\areaofstudy}  \\textit{\\grade} \\\\
    \\vspace{2mm}
    {\\institutionsummary} \\\\
    \\vspace{4mm}
    %%%%%%%%%%%%%%%%%%%%%%%%%%
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
}

%==== Projects ====%
\\header{Projects}
\\vspace{2mm}
\\foreach \\projectname [count=\\xprojectname] in \\projectnames {
\\foreach \\projectdescription [count=\\xprojectdescription] in \\projectdescriptions {
\\ifnum\\xprojectname=\\xprojectdescription
\\foreach \\projectstartdate [count=\\xprojectstartdate] in \\projectstartdates {
\\ifnum\\xprojectname=\\xprojectstartdate
\\foreach \\projectenddate [count=\\xprojectenddate] in \\projectenddates {
\\ifnum\\xprojectname=\\xprojectenddate
\\foreach \\projectwebsite [count=\\xprojectwebsite] in \\projectwebsites {
\\ifnum\\xprojectname=\\xprojectwebsite
\\foreach \\projectsummary [count=\\xprojectsummary] in \\projectsummarys {
\\ifnum\\xprojectname=\\xprojectsummary
    %%%%%%%%%%%%%%%%%%%%
    \\vspace{4mm}
    \\href{\\projectwebsite}{\\textbf{{\\projectname} }}
    \\hfill {\\projectstartdate}  
    - {\\projectenddate} \\\\
    % \\hfill Georgia, Tbilisi
    \\textit{{\\projectdescription} } \\\\
    \\vspace{1mm}
    \\begin{itemize} \\itemsep 1pt
        {\\projectsummary} 
    \\end{itemize}
    \\vspace{4mm}
    %%%%%%%%%%%%%%%%%%%%%%%%%%
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
}

%==== Awards ====%
\\header{Awards}
\\vspace{2mm}
\\foreach \\awardname [count=\\xawardname] in \\awardnames {
\\foreach \\awarddate [count=\\xawarddate] in \\awarddates {
\\ifnum\\xawardname=\\xawarddate
\\foreach \\awardwebsite [count=\\xawardwebsite] in \\awardwebsites {
\\ifnum\\xawardname=\\xawardwebsite
\\foreach \\awarddescription [count=\\xawarddescription] in \\awarddescriptions {
\\ifnum\\xawardname=\\xawarddescription
\\foreach \\awardsummary [count=\\xawardsummary] in \\awardsummarys {
\\ifnum\\xawardname=\\xawardsummary
    %%%%%%%%%%%%%%%%%%%%
    \\vspace{4mm}
    \\href{\\awardwebsite}{\\textbf{{\\awardname} }}
    \\hfill {\\awarddate}  \\\\
    % \\hfill Georgia, Tbilisi
    \\textit{{\\awarddescription} } \\\\
    \\vspace{1mm}
    {\\awardsummary}
    \\vspace{4mm}
    %%%%%%%%%%%%%%%%%%%%%%%%%%
\\fi
}
\\fi
}
\\fi
}
\\fi
}
}

%==== Skills ====%
\\header{Skills}
\\vspace{2mm}
\\foreach \\skillname [count=\\xskillname] in \\skillnames {
\\foreach \\skilllevel [count=\\xskilllevel] in \\skilllevels {
\\ifnum\\xskillname=\\xskilllevel
\\foreach \\skillexplained [count=\\xskillexplained] in \\skillexplaineds {
\\ifnum\\xskillname=\\xskillexplained
    %%%%%%%%%%%%%%%%%%%%
    \\vspace{4mm}
    \\begin{tabular}{ l l l}
    \\skillname : & \\skilllevel - & \\skillexplained
    \\end{tabular}
    \\vspace{4mm}
    %%%%%%%%%%%%%%%%%%%%%%%%%%
\\fi
}
\\fi
}
}


\\ 
\\end{document}
`;

const someInput = `\\documentclass[a4paper]{article}
\\usepackage{fullpage}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{textcomp}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{ifthen}
\\usepackage{amsmath} %\\text{} command needs this package
\\usepackage{pgffor}
\\usepackage{hyperref}
\\textheight=10in
\\pagestyle{empty}
\\raggedright


% The beginning of the variable list

% From here to the next the end of the list you can see all the %
% that are used in this resume templete. %
% You have a freedom to modify the values of variables from here if you wish %
% or from the form that is offerred by this website. %
% If you will new variables different from those that we offered, you need %
% to insert their values from here (forms can not offer you that yet) %

\\newcommand{\\englishname}{-}
\\newcommand{\\headline}{-}
\\newcommand{\\email}{-}
\\newcommand{\\mobilecontact}{-}
\\newcommand{\\media}{-}
\\newcommand{\\mediafield}{-}


% WORK EXPERIENCE
\\newcommand\\worknames{
 -
}
\\newcommand\\workpositions{
 -
}
\\newcommand\\workstartdates{
 -
}
\\newcommand\\workenddates{
 -
}
\\newcommand\\workwebsites{
 -
}
\\newcommand\\worksummarys{
 \\item -- ,
}
% EDUCATION
\\newcommand\\institutionnames{
 -
}
\\newcommand\\degrees{
 -
}
\\newcommand\\areaofstudys{
 -
}
\\newcommand\\grades{
 -
}
\\newcommand\\institutionstartdates{
 -
}
\\newcommand\\institutionenddates{
 -
}
\\newcommand\\institutionwebsites{
 -
}
\\newcommand\\institutionsummarys{
 -
}
% PROJECTS
\\newcommand\\projectnames{
 -
}
\\newcommand\\projectdescriptions{
 -
}
\\newcommand\\projectstartdates{
 -
}
\\newcommand\\projectenddates{
 -
}
\\newcommand\\projectwebsites{
 -
}
\\newcommand\\projectsummarys{
 \\item -- ,
}

% AWARDS
\\newcommand\\awardnames{
 -
}

\\newcommand\\awarddescriptions{
 -
}

\\newcommand\\awarddates{
 -
}

\\newcommand\\awardwebsites{
 -
}

\\newcommand\\awardsummarys{
 -
}

% SKILLS
\\newcommand\\skillnames{
 -
}

\\newcommand\\skilllevels{
 -
}

\\newcommand\\skillexplaineds{
 -
}


%INSERTHERE%


%TOHERE%


% The end of variables

\\def\\bull{\\vrule height 0.8ex width .7ex depth -.1ex }

% DEFINITIONS FOR RESUME %%%%%%%%%%%%%%%%%%%%%%%

\\newcommand{\\area} [2] {
\\vspace*{-9pt}
\\begin{verse}
    \\textbf{#1}   #2
\\end{verse}
}

\\newcommand{\\lineunder} {
\\vspace*{-8pt} \\\\
\\hspace*{-18pt} \\hrulefill \\\\
}

\\newcommand{\\header} [1] {
{\\hspace*{-18pt}\\vspace*{6pt} \\textsc{#1}}
\\vspace*{-6pt} \\lineunder
}

\\newcommand{\\employer} [3] {
{ \\textbf{#1} (#2)\\\\ \\underline{\\textbf{\\emph{#3}}}\\\\  }
}

\\newcommand{\\contact} [3] {
\\vspace*{-10pt}
\\begin{center}
    {\\Huge \\scshape {#1}}\\\\
    #2 \\\\ #3
\\end{center}
\\vspace*{-8pt}
}

\\newenvironment{achievements}{
\\begin{list}
    {$\\bullet$}{\\topsep 0pt \\itemsep -2pt}}{\\vspace*{4pt}
\\end{list}
}

\\newcommand{\\schoolwithcourses} [4] {
\\textbf{#1} #2 $\\bullet$ #3\\\\
#4 \\\\
\\vspace*{5pt}
}

\\newcommand{\\school} [4] {
\\textbf{#1} #2 $\\bullet$ #3\\\\
#4 \\\\
}
% END RESUME DEFINITIONS %%%%%%%%%%%%%%%%%%%%%%%

\\begin{document}
\\vspace*{-40pt}



%==== Profile ====%
\\vspace*{-10pt}
\\begin{center}
{\\Huge \\scshape \\englishname}\\\\
\\vspace{2mm}
\\headline \\\\
\\vspace{1mm}
{\\email {}} 
$\\cdot$ 
{\\mobilecontact} 
$\\cdot$
\\href{\\mediafield}{\\textbf{{\\media} }} 
\\end{center}

\\vspace{4mm}


%==== Work Experience ====%
\\header{Working Experience}
\\vspace{2mm}
\\foreach \\workname [count=\\xworkname] in \\worknames {
\\foreach \\workposition [count=\\xworkposition] in \\workpositions {
\\ifnum\\xworkname=\\xworkposition
\\foreach \\workstartdate [count=\\xworkstartdate] in \\workstartdates {
\\ifnum\\xworkname=\\xworkstartdate
\\foreach \\workenddate [count=\\xworkenddate] in \\workenddates {
\\ifnum\\xworkname=\\xworkenddate
\\foreach \\workwebsite [count=\\xworkwebsite] in \\workwebsites {
\\ifnum\\xworkname=\\xworkwebsite
\\foreach \\worksummary [count=\\xworksummary] in \\worksummarys {
\\ifnum\\xworkname=\\xworksummary
%     %%%%%%%%%%%%%%%%%%%%
  \\vspace{4mm}
  \\href{\\workwebsite}{\\textbf{{\\workname} }} 
  \\hfill {\\workstartdate}  
    - {\\workenddate} \\\\
%     % \\hfill Georgia, Tbilisi
%     \\\\
  \\textit{{\\workposition} } \\\\
  \\vspace{1mm}
  
    \\begin{itemize} \\itemsep 1pt
        {\\worksummary} 
    \\end{itemize}
  \\vspace{4mm}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
}


%==== Education ====%
\\header{Education}
\\vspace{2mm}
\\foreach \\institutionname [count=\\xinstitutionname] in \\institutionnames {
\\foreach \\areaofstudy [count=\\xareaofstudy] in \\areaofstudys {
\\ifnum\\xinstitutionname=\\xareaofstudy
\\foreach \\institutionstartdate [count=\\xinstitutionstartdate] in \\institutionstartdates {
\\ifnum\\xinstitutionname=\\xinstitutionstartdate
\\foreach \\institutionenddate [count=\\xinstitutionenddate] in \\institutionenddates {
\\ifnum\\xinstitutionname=\\xinstitutionenddate
\\foreach \\institutionwebsite [count=\\xinstitutionwebsite] in \\institutionwebsites {
\\ifnum\\xinstitutionname=\\xinstitutionwebsite
\\foreach \\degree [count=\\xdegree] in \\degrees {
\\ifnum\\xinstitutionname=\\xdegree
\\foreach \\grade [count=\\xgrade] in \\grades {
\\ifnum\\xinstitutionname=\\xgrade
\\foreach \\institutionsummary [count=\\xinstitutionsummary] in \\institutionsummarys {
\\ifnum\\xinstitutionname=\\xinstitutionsummary
%   \\noindent \\institutionname{} \\institutionsummary\\par
    %%%%%%%%%%%%%%%%%%%%
    \\vspace{4mm}
    \\href{\\institutionwebsite}{\\textbf{{\\institutionname} }} 
    \\hfill {\\institutionstartdate}  
    - {\\institutionenddate} \\\\
    % \\hfill Georgia, Tbilisi
    {\\degree} Degree of {\\areaofstudy}  \\textit{\\grade} \\\\
    \\vspace{2mm}
    {\\institutionsummary} \\\\
    \\vspace{4mm}
    %%%%%%%%%%%%%%%%%%%%%%%%%%
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
}

%==== Projects ====%
\\header{Projects}
\\vspace{2mm}
\\foreach \\projectname [count=\\xprojectname] in \\projectnames {
\\foreach \\projectdescription [count=\\xprojectdescription] in \\projectdescriptions {
\\ifnum\\xprojectname=\\xprojectdescription
\\foreach \\projectstartdate [count=\\xprojectstartdate] in \\projectstartdates {
\\ifnum\\xprojectname=\\xprojectstartdate
\\foreach \\projectenddate [count=\\xprojectenddate] in \\projectenddates {
\\ifnum\\xprojectname=\\xprojectenddate
\\foreach \\projectwebsite [count=\\xprojectwebsite] in \\projectwebsites {
\\ifnum\\xprojectname=\\xprojectwebsite
\\foreach \\projectsummary [count=\\xprojectsummary] in \\projectsummarys {
\\ifnum\\xprojectname=\\xprojectsummary
    %%%%%%%%%%%%%%%%%%%%
    \\vspace{4mm}
    \\href{\\projectwebsite}{\\textbf{{\\projectname} }}
    \\hfill {\\projectstartdate}  
    - {\\projectenddate} \\\\
    % \\hfill Georgia, Tbilisi
    \\textit{{\\projectdescription} } \\\\
    \\vspace{1mm}
    \\begin{itemize} \\itemsep 1pt
        {\\projectsummary} 
    \\end{itemize}
    \\vspace{4mm}
    %%%%%%%%%%%%%%%%%%%%%%%%%%
\\fi
}
\\fi
}
\\fi
}
\\fi
}
\\fi
}
}

%==== Awards ====%
\\header{Awards}
\\vspace{2mm}
\\foreach \\awardname [count=\\xawardname] in \\awardnames {
\\foreach \\awarddate [count=\\xawarddate] in \\awarddates {
\\ifnum\\xawardname=\\xawarddate
\\foreach \\awardwebsite [count=\\xawardwebsite] in \\awardwebsites {
\\ifnum\\xawardname=\\xawardwebsite
\\foreach \\awarddescription [count=\\xawarddescription] in \\awarddescriptions {
\\ifnum\\xawardname=\\xawarddescription
\\foreach \\awardsummary [count=\\xawardsummary] in \\awardsummarys {
\\ifnum\\xawardname=\\xawardsummary
    %%%%%%%%%%%%%%%%%%%%
    \\vspace{4mm}
    \\href{\\awardwebsite}{\\textbf{{\\awardname} }}
    \\hfill {\\awarddate}  \\\\
    % \\hfill Georgia, Tbilisi
    \\textit{{\\awarddescription} } \\\\
    \\vspace{1mm}
    {\\awardsummary}
    \\vspace{4mm}
    %%%%%%%%%%%%%%%%%%%%%%%%%%
\\fi
}
\\fi
}
\\fi
}
\\fi
}
}

%==== Skills ====%
\\header{Skills}
\\vspace{2mm}
\\foreach \\skillname [count=\\xskillname] in \\skillnames {
\\foreach \\skilllevel [count=\\xskilllevel] in \\skilllevels {
\\ifnum\\xskillname=\\xskilllevel
\\foreach \\skillexplained [count=\\xskillexplained] in \\skillexplaineds {
\\ifnum\\xskillname=\\xskillexplained
    %%%%%%%%%%%%%%%%%%%%
    \\vspace{4mm}
    \\begin{tabular}{ l l l}
    \\skillname : & \\skilllevel - & \\skillexplained
    \\end{tabular}
    \\vspace{4mm}
    %%%%%%%%%%%%%%%%%%%%%%%%%%
\\fi
}
\\fi
}
}


\\ 
\\end{document}

`;

module.exports = {defaultTM, someInput};