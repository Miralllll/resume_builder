const templete1 = `
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



\\expandafter\\newcommand\\csname english_name\\endcsname[1]{Mariam Samkharadze}
\\newcommand{\\headline}{BCs in Computer Science}
\\newcommand{\\email}{msamk18@freeuni.edu.ge}
\\expandafter\\newcommand\\csname mobile_contact\\endcsname[1]{571204725}
\\newcommand{\\media}{Github}
\\expandafter\\newcommand\\csname media_field\\endcsname[1]{https://github.com/Miralllll}

\\expandafter\\newcommand\\csname work_name\\endcsname[1]{Bank of Georgia}
\\expandafter\\newcommand\\csname work_position\\endcsname[1]{Junior Data scientist}
\\expandafter\\newcommand\\csname work_start_date\\endcsname[1]{Apr 2021}
\\expandafter\\newcommand\\csname work_end_date\\endcsname[1]{Dec 2021}
\\expandafter\\newcommand\\csname work_website\\endcsname[1]{}
\\expandafter\\newcommand\\csname work_summary\\endcsname[1]{
    \\item Worked with an agile product team,
    designed data modeling processes to create algorithms
    and predictive models, to perform custom.\\\\
    \\item Analyzed and trained a Minimal Balance Propensity and a
    Loan Propensity models.\\\\
    \\item Used technologies and concepts: Python, pandas, scikit-learn, R, XGBoost, Catboost, etc.\\\\
}

\\expandafter\\newcommand\\csname institution_name\\endcsname[1]{Free University of Tbilisi}
\\newcommand{\\degree}{BCs}
\\expandafter\\newcommand\\csname area_of_study\\endcsname[1]{Computer Science}
\\newcommand{\\grade}{0}
\\expandafter\\newcommand\\csname institution_start_date\\endcsname[1]{2018}
\\expandafter\\newcommand\\csname institution_end_date\\endcsname[1]{2022}
\\expandafter\\newcommand\\csname institution_website\\endcsname[1]{}
\\expandafter\\newcommand\\csname institution_summary\\endcsname[1]{}

\\expandafter\\newcommand\\csname skill_name\\endcsname[1]{Programming Language:    & Javascript, Python, C++, R, PHP, Bash, HTML5, CSS3}
\\expandafter\\newcommand\\csname skill_level\\endcsname[1]{}


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
	{\\Huge \\scshape \\csname english_name\\endcsname {}}\\\\
	\\vspace{2mm}
	\\headline \\\\
	\\vspace{1mm}
	{\\email {}} 
	$\\cdot$ 
	{\\csname mobile_contact\\endcsname {}} 
	$\\cdot$
	{\\media {}}
\\end{center}

\\vspace{5mm}

%==== Experience ====%
\\newcounter{int}

    \\header{Working Experience}
    \\vspace{2mm}
    
    \\setcounter{int}{1}
    \\loop
    % \\theint
    \\textbf{{\\csname work_name\\endcsname {}} } 
    % \\hfill Georgia, Tbilisi
    \\\\
    \\textit{{\\csname work_position\\endcsname {}} } 
    \\hfill {\\csname work_start_date\\endcsname {}}  | {\\csname work_end_date\\endcsname {}} \\\\
    \\vspace{-1mm}
    \\begin{itemize} \\itemsep 1pt
    	{\\csname work_summary\\endcsname {}} 
    \\end{itemize}
    \\text{ }\\addtocounter{int}{1}\\ifnum\\value{int}<2
    \\repeat


\\vspace{3mm}

%==== Education ====%

\\setcounter{int}{1}

    \\header{Education}
    \\vspace{1mm}
    
    \\setcounter{int}{1}
    \\loop
    % \\theint
    \\textbf{{\\csname institution_name\\endcsname {}} }
    % \\hfill Georgia, Tbilisi
    \\\\
    {\\csname degree\\endcsname {}}  of {\\csname area_of_study\\endcsname {}}  \\textit{GPA : 0} 
    \\hfill {\\csname institution_start_date\\endcsname {}}  
    - {\\csname institution_end_date\\endcsname {}} \\\\
    \\vspace{-1mm}
    \\ifthenelse{\\equal{\\csname institution_summary\\endcsname{}}{}}{}{
        \\begin{itemize} \\itemsep 1pt
    	{\\csname institution_summary\\endcsname {}} 
        \\end{itemize}
    }
    \\vspace{2mm}
    \\text{ }\\addtocounter{int}{1}\\ifnum\\value{int}<2
    \\repeat
    
    

\\vspace{3mm}

%==== Skills ====%

\\setcounter{int}{1}

    \\header{Skills}
    \\vspace{1mm}
    
    \\setcounter{int}{1}
    \\loop
    % \\theint
    \\begin{tabular}{ l l }
    	Programming Language:    & Javascript, Python, C++, R, PHP, Bash, HTML5, CSS3                       \\\\
    \\end{tabular}
    \\vspace{2mm}
    \\text{ }\\addtocounter{int}{1}\\ifnum\\value{int}<2
    \\repeat



\\ 
\\end{document}
`;

module.exports = {templete1};