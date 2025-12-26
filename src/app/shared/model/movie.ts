  export interface Imovie{
    description:string 
   imgURL:string

   rating:string
   title:string
   id:string
  }

  export interface movieRef{
    [key:string]:Imovie
  }