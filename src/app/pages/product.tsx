import { trpcUtils } from "@app/app"
import { Suspense } from "react"
import { Await, defer, makeLoader, useLoaderData } from "react-router-typesafe"

export function Product() {
  const data = useLoaderData<typeof productLoader>()

  return (
    <div>
      <Suspense fallback={<p>Loading package location...</p>}>
        <Await
          resolve={data.currentProduct}
          errorElement={<p>Error loading package location!</p>}
        >
          {(currentProduct) => (
            <pre>{JSON.stringify(currentProduct, null, 2)}</pre>
          )}
        </Await>
      </Suspense>
    </div>
  )
}

export const productLoader = makeLoader(async ({ params }) => {
  const { id } = params

  if (!id || typeof id !== "string") {
    throw new Response(JSON.stringify({ error: "Invalid id" }), {
      headers: {
        "content-type": "application/json",
      },
      status: 400,
    })
  }

  const idToNumber = Number(id)
  if (isNaN(Number(id))) {
    throw new Response(JSON.stringify({ error: "Invalid id" }), {
      headers: {
        "content-type": "application/json",
      },
      status: 400,
    })
  }
  const currentProduct = trpcUtils.example.getProductById.fetch({
    id: idToNumber,
  })

  return defer({
    currentProduct,
  })
})
