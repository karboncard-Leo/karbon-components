export type IframeType = {
  url?: string;
  jwtFlag?: boolean;
  queryString?: string;
  tokenName?: string;
};

export const IframeDownLoad = ({
  url = '',
  jwtFlag = false,
  queryString = '',
  tokenName = 'slidingToken',
}: IframeType) => {
  if (!url) return;
  const hiddenIFrameID = 'magicDownloader';
  let iframe = document.getElementById(hiddenIFrameID);
  if (iframe === null) {
    iframe = document.createElement('iframe');
    iframe.id = hiddenIFrameID;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }
  const jwtQuery = jwtFlag ? `jwt-token=${localStorage.getItem(tokenName)}` : '';
  const query = queryString ? `${queryString}&${jwtQuery}` : jwtQuery;

  const fileUrl = `${url}?${query}`;
  (iframe as HTMLIFrameElement).src = fileUrl;
};
