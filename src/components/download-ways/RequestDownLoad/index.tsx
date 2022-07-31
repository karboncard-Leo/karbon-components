// import { getToken } from 'src/packages/request'

const UseDownLoadWays = () => {
  const IframeDownLoadWay = (obj: IframeType) => IframeDownLoad(obj);

  const FileRequestDownLoadWay = (obj: FileRequestType) => FileRequestDownLoad(obj);

  const FileDownPercent = (obj: DownloadPercent) => RequestPercent(obj);

  return {
    FileDownPercent,
    IframeDownLoadWay,
    FileRequestDownLoadWay,
  };
};

export default UseDownLoadWays;

export type IframeType = {
  url: string;
  jwtFlag?: boolean;
  queryString?: string;
};
// const queryString = Qs.stringify(query, { arrayFormat: 'brackets' })
export const IframeDownLoad = ({ url = '', jwtFlag = false, queryString = '' }: IframeType) => {
  if (!url) return;
  const hiddenIFrameID = 'magicDownloader';
  let iframe = document.getElementById(hiddenIFrameID);
  if (iframe === null) {
    iframe = document.createElement('iframe');
    iframe.id = hiddenIFrameID;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }
  // getToken()
  const jwtQuery = jwtFlag ? `jwt-token=${'你的token'}` : '';
  const query = queryString ? `${queryString}&${jwtQuery}` : jwtQuery;

  const fileUrl = `${url}?${query}`;
  (iframe as HTMLIFrameElement).src = fileUrl;
};

export type FileRequestType = {
  url: string;
  way?: 'blob' | 'arraybuffer';
  option?: Object;
  onfail?: (err: any) => void;
  onsuccess?: (data: any) => void;
};

// 下载文件
export const FileRequestDownLoad = async ({
  url = '',
  onsuccess,
  way,
  onfail,
  option = {
    headers: {
      Authorization: `Bearer ${'你的token'}`,
      'Content-Type': 'application/pdf',
      responseType: way,
    },
  },
}: FileRequestType) => {
  const res = await fetch(url, option);
  const result = way === 'blob' ? await res.blob() : await res.arrayBuffer();
  if (res.ok && !!onsuccess) {
    onsuccess(result);
  } else if (!res.ok && !!onfail) {
    onfail(result);
  } else {
    return result;
  }
};

//   option = {
//     // method: 'POST',
//     // headers: {
//     //   'Content-Type': 'application/json;charset=utf-8',
//     // },
//     // body: JSON.stringify(''), //传递的对象
//     // signal: controller.signal,
//     // responseType: way,
//   },

// 下载进度
type DownloadPercent = {
  url: string;
  option?: Object;
  onprocess: (now: number, all: number) => void;
  onsuccess: (data: any) => void;
};
export const RequestPercent = async ({
  url = '',
  option = {
    headers: {
      Authorization: `Bearer ${'你的token'}`,
      'Content-Type': 'application/pdf',
      responseType: 'blob',
    },
  },
  onsuccess,
  onprocess,
}: DownloadPercent) => {
  const response = (await fetch(url, option)) as any;

  const reader = response?.body.getReader();

  // 文件总长度
  const contentLength = +response.headers.get('content-length');

  let receivedLength = 0;
  const chunks = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(value);
    receivedLength += value.length;
    onprocess(receivedLength, contentLength);
  }

  const chunksAll = new Uint8Array(receivedLength);
  let position = 0;
  for (const chunk of chunks) {
    chunksAll.set(chunk, position);
    position += chunk.length;
  }
  // 转blob对象
  //   const blob = new Blob([chunksAll], { type: 'application/pdf' })
  //   const blobUrl = window.URL.createObjectURL(blob)
  onsuccess(chunksAll);

  return chunksAll;
};
