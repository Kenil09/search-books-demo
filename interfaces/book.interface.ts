export interface Book {
  key: string;
  type: Type;
  seed: string[];
  title: string;
  title_sort: string;
  title_suggest: string;
  edition_count: number;
  edition_key: string[];
  publish_date?: string[];
  publish_year: number[];
  first_publish_year: number;
  number_of_pages_median?: number;
  lccn?: string[];
  publish_place?: string[];
  oclc?: string[];
  lcc?: string[];
  ddc?: string[];
  isbn: string[];
  last_modified_i: number;
  ebook_count_i: number;
  ebook_access: EbookAccess;
  has_fulltext: boolean;
  public_scan_b: boolean;
  ia?: string[];
  ia_collection?: string[];
  ia_collection_s?: string;
  printdisabled_s?: string;
  ratings_average?: number;
  ratings_sortable?: number;
  ratings_count?: number;
  ratings_count_1?: number;
  ratings_count_2?: number;
  ratings_count_3?: number;
  ratings_count_4?: number;
  ratings_count_5?: number;
  readinglog_count?: number;
  want_to_read_count?: number;
  currently_reading_count?: number;
  already_read_count?: number;
  cover_edition_key?: string;
  cover_i?: number;
  publisher?: string[];
  language?: Language[];
  author_key?: string[];
  author_name?: string[];
  author_alternative_name?: string[];
  subject?: string[];
  id_amazon?: string[];
  id_better_world_books?: string[];
  id_goodreads?: string[];
  id_learnawesome?: string[];
  id_wikidata?: string[];
  ia_box_id?: string[];
  publisher_facet?: string[];
  subject_facet?: string[];
  _version_: number;
  lcc_sort?: string;
  author_facet?: string[];
  subject_key?: string[];
  ddc_sort?: string;
}

export enum EbookAccess {
  NoEbook = "no_ebook",
  Printdisabled = "printdisabled",
}

export enum Language {
  Eng = "eng",
  Fre = "fre",
  Por = "por",
  SPA = "spa",
  Tur = "tur",
}

export enum Type {
  Work = "work",
}

export interface sortInterface {
  name: string;
  sortAsc: string;
}
