import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        <div className=" bg mt-4 ">
          <div className="w-[100%] flex ">
            <div className="bg-blue-10 w-[70%] text-white p-2 text-[1.2em] ">
            {productPreview.title}
            </div>
            <div className="bg-black-10 w-[30%] text-white p-2 text-[1.2em] ">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
          </div>
          {/* <Text className="bg-blue-400 w-1/3" data-testid="product-title">{productPreview.title}</Text>
          <div className="flex items-center gap-x-2">
           
          </div> */}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
