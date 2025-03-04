<template>
  <div>
    <h1>ตะกร้าสินค้า</h1>
    <div v-if="cart.length > 0">
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-image" />
        <div class="cart-details">
          <h2>{{ item.name }}</h2>
          <p>ราคา: {{ item.price }} บาท</p>
          <button @click="removeFromCart(index)" class="remove-button">ลบ</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>ตะกร้าว่างเปล่า</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingBasket",
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  methods: {
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.cart-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-details {
  flex-grow: 1;
}

.remove-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.remove-button:hover {
  background-color: darkred;
}
</style>