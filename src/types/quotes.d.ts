export interface QuoteResponse {
  data:        QuoteData[];
  message:     string;
  pagination:  Pagination;
  statusCode:  number;
  totalQuotes: number;
 }
 
 export interface QuoteData {
  __v:         number;
  _id:         string;
  quoteAuthor: string;
  quoteGenre:  string;
  quoteText:   string;
 }
 
 export interface Pagination {
  currentPage: number;
  nextPage:    number;
  totalPages:  number;
 }