// package
import { CircleX, ShoppingCart, Trash2 } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';

// custom component
import { ChangeQtyButtons } from "@/components/customs/ChangeQtyButtonsComponent"

// shadcn
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

// store
import { useStore } from '@/stores/SlicesStore';

export function Cart() {

	const { reset, products, removeProduct, total, address } = useStore(

		useShallow((state) => ({
			products: state.products,
            total: state.total,
			address: state.address,

			reset: state.reset,
			removeProduct: state.removeProduct,
			
		}))

	);

	return (
		<Popover>

			<PopoverTrigger asChild>
				<Button variant="secondary" size="icon">
					<ShoppingCart />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="overflow-y-scroll space-y-2 w-96">
                
				<div className="flex gap-2 text-lg items-center">
					<h1>Cart:</h1>
					<Button onClick={reset} variant="destructive" size="icon">
						<CircleX />
					</Button>
				</div>

				<div className="space-y-2">
					{products.map((product) => (

						<Card className="flex flex-col" key={product.id}>
							<CardHeader className="flex flex-row items-center gap-2">
								<CardTitle>{product.title}</CardTitle>
								<Button
									onClick={() => removeProduct(product.id)}
									size="icon"
									variant="destructive"
								>
									<Trash2 />
								</Button>
							</CardHeader>
							<CardContent>{product.price}</CardContent>
							<CardFooter>
								<ChangeQtyButtons productId={product.id} />
							</CardFooter>
						</Card>
                        
					))}
				</div>

				<p>Total: {total}$</p>
				<p>Address: {address}</p>
			</PopoverContent>
		</Popover>
	);
}