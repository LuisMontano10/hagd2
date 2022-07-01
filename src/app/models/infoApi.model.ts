export interface InfoApiResponse{
count:number,
entries: InfoApi[]

}

export interface InfoApi{
API:string,
Description:string,
Link:string,
Category:string,
Cors:string

}