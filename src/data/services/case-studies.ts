export interface ServiceCaseStudy {
 title:string; client:string; summary:string; challenge:string; approach:string; outcome:string; href?:string;
}
// Add an approved case study under its service slug to replace that page's reserved section.
// Keep results factual and include the period and measurement context for numerical claims.
export const serviceCaseStudies:Partial<Record<string,ServiceCaseStudy>>={};
