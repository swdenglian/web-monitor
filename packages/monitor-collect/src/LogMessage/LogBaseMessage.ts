import UA from '../device';

const UserId: string = 'denglian1008';
const ReqId: string = UserId + '_' + Date.now().toString();

export class LogBaseMessage {
  public constructor(
    public type: string,
    public userID: string = UserId,
    public time: number = Date.now(),
    public url: string = window.location.href,
    public reqId: string = ReqId,
    public ua: string = UA,
  ) {}

  public toJSON() {
    return {
      type: this.type,
      userID: this.userID,
      time: this.time,
      ua: this.ua,
      url: this.url,
    };
  }
}
