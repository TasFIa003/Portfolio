export interface Experience {
  role: string;
  organization: string;
  department?: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  tags?: string[];
}

export const experience: Experience[] = [
  {
    role: 'Research Assistant',
    organization: 'University of Rajshahi',
    department: 'Bioinformatics Lab (Dry), Department of Statistics',
    location: 'Rajshahi, Bangladesh',
    startDate: 'Nov 2023',
    endDate: 'Present',
    description: [
      'Designs and implements bioinformatics algorithms, R packages, and web-based platforms for drug and vaccine discovery.',
      'Conducts integrative multi-omics analysis across genomics, transcriptomics, proteomics, and metagenomics data.',
      'Identifies disease co-morbidity/co-infection key-genes, biomarkers, and drug repurposing candidates.',
      'Applies PPI network analysis, molecular docking (AutoDock Vina), and ADMET evaluation pipelines.',
      'Co-authored 7+ peer-reviewed publications in journals including Scientific Reports, PLOS ONE, and Briefings in Bioinformatics.',
    ],
    tags: ['R', 'Python', 'Bioinformatics', 'Multi-omics', 'Drug Repurposing'],
  },
  {
    role: 'Software Developer',
    organization: 'RemoteIntegrity, LLC',
    location: 'Remote',
    startDate: 'Mar 2025',
    endDate: 'Sep 2025',
    description: [
      'Built secure Node.js backend systems to automate supplier Excel processing and streamline data ingestion pipelines.',
      'Developed dynamic energy-pricing matrices across multiple suppliers, utilities, and U.S. states.',
      'Implemented JWT-based authentication and authorization for secure API endpoints.',
    ],
    tags: ['Node.js', 'JWT', 'REST API', 'Excel Automation'],
  },
];
