import React, { useCallback } from "react";
import { AssetRecordType, Editor, Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import case1 from '../../assets/Breast_cancer_img.jpg'

export default function Canvas() {
  const handleMount = useCallback((editor: Editor) => {
    const assetId = AssetRecordType.createId();
    const imageWidth = 1200;
    const imageHeight = 675;
    editor.createAssets([
      {
        id: assetId,
        type: "image",
        typeName: "asset",
        props: {
          name: "case1",
          src: case1,
          w: imageWidth,
          h: imageHeight,
          mimeType: "image/jpg",
          isAnimated: false,
        },
        meta: {},
      },
    ]);
    //[3]
    editor.createShape({
      type: "image",
      x: (window.innerWidth - imageWidth) / 2,
      y: (window.innerHeight - imageHeight) / 2,
      props: {
        assetId,
        w: imageWidth,
        h: imageHeight,
      },
    });
  }, []);
  return (
    <div style={{ position: "absolute", inset: 0, top: "190px" }}>
      <Tldraw onMount={handleMount} />
    </div>
  );
}
