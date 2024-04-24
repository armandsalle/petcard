import { trpc } from "@app/helpers/trpc"
import { faker } from "@faker-js/faker"
import type { Product } from "@server/db/schema"
import { Link } from "react-router-dom"

const itemStyles = {
  first: "flex gap-1 w-full rounded-t-lg border-b border-gray-200",
  default: "flex gap-1 w-full border-b border-gray-200",
  last: "flex gap-1 w-full rounded-b-lg",
}

function ItemLink({ id }: { id: number }) {
  return (
    <Link
      to={`/product/${id}`}
      className="ml-auto mr-2 self-center p-1 text-center text-xs font-medium text-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      <svg
        className="size-4 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
        />
      </svg>
    </Link>
  )
}

function LoadingDelete() {
  return (
    <div className="mr-2 self-center p-1">
      <svg
        aria-hidden="true"
        role="status"
        className="size-4 animate-spin text-gray-200"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
          className="text-gray-800"
        />
      </svg>
    </div>
  )
}
function LoadingLink() {
  return (
    <div className="ml-auto mr-2 self-center p-1">
      <svg
        aria-hidden="true"
        role="status"
        className="size-4 animate-spin text-gray-200"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
          className="text-gray-800"
        />
      </svg>
    </div>
  )
}

const TrashIcon = () => (
  <svg
    className="size-4 text-red-400"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
    />
  </svg>
)

type ItemProps = {
  product: Product
  className: string
  isPending?: boolean
  onDelete?: () => void
  isDeleting?: boolean
}
function Item({
  product,
  className,
  isPending,
  onDelete,
  isDeleting,
}: ItemProps) {
  return (
    <li className={className}>
      <div className="border-r py-2	pl-4 pr-2 tabular-nums">{product.id}</div>
      <div className="py-2 pl-2 pr-4">{product.name}</div>
      {isPending ? <LoadingLink /> : <ItemLink id={product.id} />}
      {isDeleting ? (
        <LoadingDelete />
      ) : (
        <button className="mr-2 self-center p-1" onClick={() => onDelete?.()}>
          <TrashIcon />
        </button>
      )}
    </li>
  )
}

export function Home() {
  const utils = trpc.useUtils()

  const productsQuery = trpc.example.getProducts.useQuery(undefined, {
    retry: false,
  })

  const deleteProductMutation = trpc.example.deleteProductById.useMutation({
    onSuccess: async () => {
      await utils.example.getProducts.invalidate()
    },
  })

  const productsMutation = trpc.example.setProduct.useMutation({
    onSuccess: async () => {
      await utils.example.getProducts.invalidate()
    },
  })

  const getItemClassName = (index: number) => {
    if (index === 0) {
      return itemStyles.first
    }

    if (
      index === productsQuery.data!.length - 1 &&
      productsMutation.status !== "pending"
    ) {
      return itemStyles.last
    }

    return itemStyles.default
  }

  return (
    <div className="flex flex-col items-start gap-4 p-4">
      {productsQuery.data ? (
        <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900">
          {productsQuery.data?.map((product, index) => (
            <Item
              key={product.id}
              product={product}
              className={getItemClassName(index)}
              onDelete={() => {
                deleteProductMutation.mutate({ id: product.id })
              }}
              isDeleting={
                deleteProductMutation.status === "pending" &&
                deleteProductMutation.variables?.id === product.id
              }
            />
          ))}
          {productsMutation.status === "pending" ? (
            <Item
              product={{
                description: productsMutation.variables?.description || "",
                name: productsMutation.variables?.name || "",
                price: productsMutation.variables?.price || 0,
                id: productsQuery.data.at(-1)!.id + 1,
              }}
              className={itemStyles.last}
              isPending
            />
          ) : null}
        </ul>
      ) : (
        <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900">
          <li className={itemStyles.first}>
            <div className="border-r py-2	pl-4 pr-2 tabular-nums">--</div>
            <div className="py-2 pl-2 pr-4 text-gray-500">Loading...</div>
          </li>
        </ul>
      )}

      <button
        className="mb-2 me-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
        onClick={() => {
          productsMutation.mutate({
            description: faker.commerce.productDescription(),
            name: faker.commerce.productName(),
            price: Number(faker.commerce.price()),
          })
        }}
      >
        Create product
      </button>
    </div>
  )
}
