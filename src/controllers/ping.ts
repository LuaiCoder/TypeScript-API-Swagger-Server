import { Get, Route, Post, Body } from "tsoa";


interface PingResponse {
    message: string;
  }

  interface ICommentPayload {
    customerNumber: number;
    membershipNumber: number;
    locationID: string;
}

  
  @Route("")
  export default class PingController {
    @Get("/ping")
    public async getMessage(): Promise<PingResponse> {
      return {
        message: "This is a PONG, The server responded with a PONG message",
      };
    }
    @Get("/mess")
    public async getMess(): Promise<PingResponse> {
        return {
          message: "Welcome to the TypeScript API Swagger Server",
        };
      }
    @Post("/")
      public async createComment(@Body() body: ICommentPayload): Promise<ICommentPayload> {
        const data: ICommentPayload = {
          customerNumber: body.customerNumber,
          membershipNumber: body.membershipNumber,
          locationID: body.locationID,
        };
        return data;
      }
  }