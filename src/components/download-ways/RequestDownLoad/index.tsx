export type FileRequestType = {
  url: string;
  way: 'arrayBuffer' | 'blob';
};

export const FileRequestDownLoad = async ({ url = '', way = 'blob' }: FileRequestType) => {
  const result = await fetch(url).then((res: any) => {
    if (way === 'arrayBuffer') {
      return res.arrayBuffer();
    } else if (way === 'blob') {
      return res.blob();
    } else {
      return res;
    }
  });
  return result;
};
