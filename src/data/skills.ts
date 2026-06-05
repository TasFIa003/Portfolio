export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming & Scripting',
    icon: 'code',
    skills: [
      'R', 'Python', 'C', 'C++', 'Java',
      'JavaScript', 'Node.js', 'React.js', 'Angular.js',
      'HTML', 'CSS', 'SQL (MySQL, PostgreSQL)',
    ],
  },
  {
    category: 'Bioinformatics & Computational Biology',
    icon: 'dna',
    skills: [
      'LIMMA', 'DESeq2', 'WGCNA',
      'PPI Network Analysis', 'Biomarker Discovery',
      'RNA-seq Analysis', 'scRNA-seq Analysis', '16S rRNA-seq Analysis',
      'ggplot2', 'ComplexHeatmap', 'Plotly',
      'Drug Repurposing Pipelines',
    ],
  },
  {
    category: 'Cheminformatics & Structural Biology',
    icon: 'molecule',
    skills: [
      'Molecular Docking (AutoDock Vina, PyRx)',
      'ADMET Analysis (SwissADME, pkCSM, ADMETlab)',
      'RDKit', 'Open Babel',
      'PyMOL', 'Discovery Studio Visualizer',
    ],
  },
  {
    category: 'Machine Learning & Data Science',
    icon: 'brain',
    skills: [
      'Scikit-learn', 'Random Forest',
      'NumPy', 'Pandas', 'Matplotlib', 'OpenCV',
    ],
  },
];
