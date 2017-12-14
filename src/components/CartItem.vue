<template>
  <tr>
	<td data-th="Product">
	    <div class="row">
			<div class="col-sm-2 hidden-xs"><img :src="cartItem.product.image" alt="..." class="img-responsive"/></div>
				<div class="col-sm-10">
					<h4 class="nomargin">{{cartItem.product.name}}</h4>
					<p>{{cartItem.product.memory}}</p>
				</div>
			</div>
		</td>
		<td data-th="Price">${{cartItem.product.price}}</td>
		<td data-th="Quantity">
			<input type="number" class="form-control text-center" value="1">
		</td>
		<td data-th="Subtotal" class="text-center">${{cartItem.product.price}}</td>
		<td class="actions" data-th="">
			<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
			<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>								
		</td>
	</tr>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['cartItem']
}
</script>

<style>

</style>
