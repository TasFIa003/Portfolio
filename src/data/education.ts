export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: string;
  gradeScale: string;
  juniorSeniorAvg: string;
}

export const education: Education[] = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Rajshahi University of Engineering & Technology (RUET)',
    location: 'Rajshahi, Bangladesh',
    startDate: 'Feb 2019',
    endDate: 'May 2024',
    grade: '3.68',
    gradeScale: '4.00',
    juniorSeniorAvg: "3.87"
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Rajshahi College',
    location: 'Rajshahi, Bangladesh',
    startDate: 'Jul 2016',
    endDate: 'Apr 2018',
    grade: '5.00',
    gradeScale: '5.00',
  },
];
