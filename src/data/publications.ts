export type PublicationStatus = 'Published' | 'Under Review' | 'Under Revision' | 'Minor Revision';
export type PublicationType = 'Journal' | 'Conference';


export interface Publication {
  id: string;
  authors: string;
  title: string;
  venue: string;
  year: number;
  status: PublicationStatus;
  type: PublicationType;
  doi?: string;
  doiUrl?: string;
  isLeadAuthor?: boolean;
  note?: string;
}

export const publications: Publication[] = [
  // ── PUBLISHED JOURNALS (newest first) ──────────────────────────────────────
  {
    id: 'pub-t2d-tnbc-2026',
    authors: 'Ahmed MF, Sharma O, Noor T, Latif MA, Ahmed MF, Bashak M, Ahmed DM, Hossain MS, Mollah MNH',
    title: 'Large-scale transcriptomic data mining using explainable XGBoost and SHAP reveals shared biomarkers and molecular mechanisms between type-2 diabetes and triple-negative breast cancer for drug repurposing.',
    venue: 'BioData Mining',
    year: 2026,
    status: 'Published',
    type: 'Journal',
    doi: '10.1371/journal.pone.0337970',
    doiUrl: 'https://doi.org/10.1186/s13040-026-00575-9',
  },
  {
    id: 'pub-t2d-mi-2026',
    authors: 'Ahmmed R, Antu US, Noor T, Faysal MF, Akter MT, Nesa M, Mollah MNH',
    title: 'Discovery of shared molecular signatures and their functions associated with type-2 diabetes and myocardial infarction, and repurposing common drugs.',
    venue: 'Computational Biology and Chemistry',
    year: 2026,
    status: 'Published',
    type: 'Journal',
    doi: '10.1016/j.compbiolchem.2026.109036',
    doiUrl: 'https://doi.org/10.1016/j.compbiolchem.2026.109036',
  },
  {
    id: 'pub-t2d-crc-2026',
    authors: 'Ahmmed R, Antu US, Noor T, Faysal MF, Sarker A, Mahmud S, Ajadee A, Mollah MNH',
    title: 'Genetic underpinnings of type-2 diabetes (T2D) with colorectal cancer (CRC): in-silico discovery of common molecular signatures, pathogenetic processes and therapeutic candidates.',
    venue: 'Journal of Genetic Engineering and Biotechnology',
    year: 2026,
    status: 'Published',
    type: 'Journal',
    doi: '10.1016/j.jgeb.2026.100667',
    doiUrl: 'https://doi.org/10.1016/j.jgeb.2026.100667',
  },
  {
    id: 'pub-crc-gut-2026',
    authors: 'Pal NK, Kibria MK, Noor T, Ahmed MF, Islam MS, Ahmed MF, Latif MA, Ali M, Noman MA, Kundu D, Sharma O, Mollah MNH',
    title: 'In-silico identification of bacterial key-genes directly or indirectly associated with the development and progression of colorectal cancer for exploring anti-bacterial agents.',
    venue: 'Computational Biology and Chemistry',
    year: 2026,
    status: 'Published',
    type: 'Journal',
    doi: '10.1016/j.compbiolchem.2026.109036',
    doiUrl: 'https://doi.org/10.1371/journal.pone.0343565',
  },
  
  {
    id: 'pub-black-cumin-2026',
    authors: 'Ali MA, Sheikh H, Reza MS, Paul TR, Noor T, et al.',
    title: 'Exploring potential phytocompounds from black cumin as drug molecules against SARS-CoV-2 infections through bioinformatics analysis.',
    venue: 'PLOS ONE',
    year: 2026,
    status: 'Published',
    type: 'Journal',
    doi: '10.1371/journal.pone.0337970',
    doiUrl: 'https://doi.org/10.1371/journal.pone.0337970',
  },
  {
    id: 'pub-dengue-host-2025',
    authors: 'Latif MA, Noman MA, Ahmmed R, Hossain MS, Ahmed MF, Pappu MAA, Islam MS, Noor T, Kabir MH, Mollah MNH',
    title: 'In-silico identification of host-key-genes associated with dengue-virus infections highlighting their pathogenetic mechanisms and therapeutic agents.',
    venue: 'PLOS ONE',
    year: 2025,
    status: 'Published',
    type: 'Journal',
    doi: '10.1371/journal.pone.0333509',
    doiUrl: 'https://doi.org/10.1371/journal.pone.0333509',
  },
  {
    id: 'pub-dengue-scrna-2025',
    authors: 'Noman MA, Latif MA, Ahmmed MF, Islam MS, Pappu MAA, Hossain MS, Hossen MB, Noor T, Kabir MH, Mollah MNH',
    title: 'In-silico discovery of druggable molecular signatures that drive dengue fever to severe dengue fever highlighting common pathogenesis through single-cell RNA-Seq analysis.',
    venue: 'Scientific Reports',
    year: 2025,
    status: 'Published',
    type: 'Journal',
    doi: '10.1038/s41598-025-23000-3',
    doiUrl: 'https://doi.org/10.1038/s41598-025-23000-3',
  },
  {
    id: 'pub-pancreatic-kidney-2025',
    authors: 'Ajadee A, Mahmud S, Sarkar A, Noor T, Ahmmed R, Mollah MNH',
    title: 'Screening of common genomic biomarkers to explore common drugs for the treatment of pancreatic and kidney cancers with type-2 diabetes through bioinformatics analysis.',
    venue: 'Scientific Reports',
    year: 2025,
    status: 'Published',
    type: 'Journal',
    doi: '10.1038/s41598-025-91875-3',
    doiUrl: 'https://doi.org/10.1038/s41598-025-91875-3',
  },
  {
    id: 'pub-crc-hcc-2025',
    authors: 'Mahmud S, Ajadee A, Sarker A, Ahmmed R, Noor T, Pappu MAA, et al.',
    title: 'Exploring common genomic biomarkers to disclose common drugs for the treatment of colorectal cancer and hepatocellular carcinoma with type-2 diabetes through transcriptomics analysis.',
    venue: 'PLOS ONE',
    year: 2025,
    status: 'Published',
    type: 'Journal',
    doi: '10.1371/journal.pone.0319028',
    doiUrl: 'https://doi.org/10.1371/journal.pone.0319028',
  },
  {
    id: 'pub-crc-hcc-2026',
    authors: 'Ahmed MF, Faysal MF, Noor T, Mollah MNH',
    title: 'FlexAutoDock: A Flexible Platform for Automated Molecular Docking and Virtual Screening of Natural and Synthetic Compounds',
    venue: 'Preprint',
    year: 2026,
    status: 'Published',
    type: 'Journal',
    doi: '10.64898/2026.08.11.744098',
    doiUrl: 'https://doi.org/10.1371/journal.pone.0319028',
  },
  
 

  // ── UNDER REVISION / UNDER REVIEW ──────────────────────────────────────────
  {
    id: 'rev-dengue-cov-coinfection',
    authors: 'Noor T, Faysal MF, Ahmed R, Ahmed MF, Sharma O, Kabir MH, Kabir MR, Kabir MMJ, Mollah MNH',
    title: 'Computational discovery of common host key-genes (chKGs) and their mechanisms associated with Dengue–SARS-CoV-2 co-infection for exploring common therapies through integrated RNA-seq profile analysis.',
    venue: 'PLOS ONE',
    year: 2026,
    status: 'Minor Revision',
    type: 'Journal',
    isLeadAuthor: true,
  },
  {
    id: 'rev-ipf-tb',
    authors: 'Faysal MF, Noor T, Shyla S, Sharma O, Ahmed MF, Ahmed R, Kabir MMJ, Mollah MNH',
    title: 'Computational identification of druggable shared host-key-genes and their mechanisms linking idiopathic pulmonary fibrosis to tuberculosis, and dual-acting drug repurposing.',
    venue: 'PLOS ONE',
    year: 2026,
    status: 'Under Review',
    type: 'Journal',
  },
  {
    id: 'rev-t2d-tb',
    authors: 'Faysal MF, Noor T, Shyla S, Sharma O, Ahmed MF, Ahmed R, Noor A, Kabir MMJ, Mollah MNH',
    title: 'In-silico discovery of shared host key-genes (shKGs) and mechanisms by which Type-2 Diabetes increases the risk of tuberculosis, and repurposing dual-acting candidate drugs.',
    venue: 'Infection Genetics and Evolution',
    year: 2026,
    status: 'Under Review',
    type: 'Journal',
  },
  
  {
    id: 'rev-bacterial-t2d',
    authors: 'Kibria MF, Noor T, Ahmmed R, Horaira MA, Reza MS, Mollah MNH',
    title: 'Identification of bacterial key-genes associated with type-2 diabetes for exploring anti-bacterial agents through 16S rRNA-Seq profile analysis.',
    venue: 'PLOS ONE',
    year: 2025,
    status: 'Under Review',
    type: 'Journal',
  },

  // ── CONFERENCE PROCEEDINGS ──────────────────────────────────────────────────
  {
    id: 'conf-sars-dengue-icrsds',
    authors: 'Noor T, Faysal MF, Sadad N, Mondal MNI',
    title: 'Discovery of SARS-CoV-2 and Dengue-Virus co-infections causing shared host key-genes using bioinformatics and machine learning approaches for diagnosis and therapies.',
    venue: '8th International Conference on the Role of Statistics and Data Science in 4IR (ICRSDS4IR), Rajshahi, Bangladesh',
    year: 2024,
    status: 'Published',
    type: 'Conference',
    isLeadAuthor: true,
  },
  {
    id: 'conf-ipf-tb-becithcon',
    authors: 'Faysal MF, Afroge S, Noor T',
    title: 'In-silico identification of shared hub-genes between idiopathic pulmonary fibrosis and tuberculosis diseases & drug repurposing.',
    venue: '2024 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON), pp. 67–72, IEEE',
    year: 2024,
    status: 'Published',
    type: 'Conference',
    doiUrl: 'https://ieeexplore.ieee.org/document/10962684',
  },
];
