<template>
  <div v-if="product" class="details-container">
    <div class="image-container">
      <img :src="product.image" :alt="product.name" class="product-image" />
    </div>

    <div class="info-container">
      <h1>{{ product.name }}</h1>
      <p class="description">{{ product.description }}</p>
      <p class="price">ราคา: {{ product.price }} บาท</p>
      
      <div class="cart-controls">
        <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
        <span>{{ quantity }}</span>
        <button @click="increaseQuantity">+</button>
      </div>

      <button @click="addToCart" class="add-to-cart">🛒เพิ่มลงตะกร้า</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["id"],
  data() {
    return {
      products: [
      { id: 1, name: "เสื้อเชิ้ตสีดำ", price: 500, description: "เสื้อเชิ้ตคลาสสิก เสริมลุคเนี้ยบ เท่ มีสไตล์ เปลี่ยนลุคให้ดูดีได้ในทุกโอกาส ด้วยเสื้อเชิ้ตดีไซน์สุดคลาสสิกที่ตัดเย็บจากผ้าคุณภาพเยี่ยม นุ่ม ใส่สบาย ไม่ระคายเคืองผิว เหมาะทั้งใส่ทำงาน ออกเดต หรือแมตช์กับกางเกงยีนส์ลำลองก็ดูเท่ได้ง่ายๆ เพิ่มความมั่นใจให้ทุกวันของคุณ!", image: require('@/assets/shirt1.jpg') },
      { id: 2, name: "เสื้อเชิ้ตสีขาว", price: 500, description: "เสื้อเชิ้ตคลาสสิก เสริมลุคเนี้ยบ เท่ มีสไตล์ เปลี่ยนลุคให้ดูดีได้ในทุกโอกาส ด้วยเสื้อเชิ้ตดีไซน์สุดคลาสสิกที่ตัดเย็บจากผ้าคุณภาพเยี่ยม นุ่ม ใส่สบาย ไม่ระคายเคืองผิว เหมาะทั้งใส่ทำงาน ออกเดต หรือแมตช์กับกางเกงยีนส์ลำลองก็ดูเท่ได้ง่ายๆ เพิ่มความมั่นใจให้ทุกวันของคุณ!", image: require('@/assets/shirt2.webp') },
      { id: 3, name: "เสื้อเชิ้ตสีฟ้า", price: 500, description: "เสื้อเชิ้ตคลาสสิก เสริมลุคเนี้ยบ เท่ มีสไตล์ เปลี่ยนลุคให้ดูดีได้ในทุกโอกาส ด้วยเสื้อเชิ้ตดีไซน์สุดคลาสสิกที่ตัดเย็บจากผ้าคุณภาพเยี่ยม นุ่ม ใส่สบาย ไม่ระคายเคืองผิว เหมาะทั้งใส่ทำงาน ออกเดต หรือแมตช์กับกางเกงยีนส์ลำลองก็ดูเท่ได้ง่ายๆ เพิ่มความมั่นใจให้ทุกวันของคุณ!", image: require('@/assets/shirt3.jpg') },
      { id: 4, name: "เสื้อยืดสีน้ำเงิน", price: 300, description: "เสื้อยืดพรีเมียม เบาสบาย ใส่ได้ทุกวัน เสื้อยืดเนื้อผ้านุ่ม ระบายอากาศดี ใส่สบายตลอดวัน แม้ในวันที่อากาศร้อน ทรงสวยพอดีตัว ไม่รัดแน่นเกินไป ไม่หลวมเกินไป แมตช์กับอะไรก็เท่ สีไม่ซีด ซักกี่ครั้งก็ยังดูใหม่ ไอเท็มที่ต้องมีติดตู้ ใส่แล้วดูดีไม่มีเอาท์!", image: require('@/assets/tshirt1.avif') },
      { id: 5, name: "เสื้อยืดสีขาว", price: 300, description: "เสื้อยืดพรีเมียม เบาสบาย ใส่ได้ทุกวัน เสื้อยืดเนื้อผ้านุ่ม ระบายอากาศดี ใส่สบายตลอดวัน แม้ในวันที่อากาศร้อน ทรงสวยพอดีตัว ไม่รัดแน่นเกินไป ไม่หลวมเกินไป แมตช์กับอะไรก็เท่ สีไม่ซีด ซักกี่ครั้งก็ยังดูใหม่ ไอเท็มที่ต้องมีติดตู้ ใส่แล้วดูดีไม่มีเอาท์!", image: require('@/assets/tshirt2.jpg') },
      { id: 6, name: "เสื้อยืดแดง", price: 300, description: "เสื้อยืดพรีเมียม เบาสบาย ใส่ได้ทุกวัน เสื้อยืดเนื้อผ้านุ่ม ระบายอากาศดี ใส่สบายตลอดวัน แม้ในวันที่อากาศร้อน ทรงสวยพอดีตัว ไม่รัดแน่นเกินไป ไม่หลวมเกินไป แมตช์กับอะไรก็เท่ สีไม่ซีด ซักกี่ครั้งก็ยังดูใหม่ ไอเท็มที่ต้องมีติดตู้ ใส่แล้วดูดีไม่มีเอาท์!", image: require('@/assets/tshirt3.jpg') },
      { id: 7, name: "เสื้อฮู้ดสีดำ", price: 800, description: "เสื้อฮู้ดอุ่นสบาย ลุคเท่ มีสไตล์ กันหนาวได้ดี เสื้อฮู้ดเนื้อผ้านุ่ม ใส่สบาย ให้ความอบอุ่นได้ดีในวันอากาศเย็น ดีไซน์ทันสมัย ใส่เที่ยว ใส่ออกกำลังกาย หรือใส่ลำลองก็ได้หมด มีกระเป๋าหน้าสำหรับใส่มือหรือของเล็กๆ น้อยๆ เพิ่มความเท่และความอบอุ่นให้กับทุกวันของคุณ!", image: require('@/assets/hoodie1.jpg') },
      { id: 8, name: "เสื้อฮู้ดสีขาว", price: 800, description: "เสื้อฮู้ดอุ่นสบาย ลุคเท่ มีสไตล์ กันหนาวได้ดี เสื้อฮู้ดเนื้อผ้านุ่ม ใส่สบาย ให้ความอบอุ่นได้ดีในวันอากาศเย็น ดีไซน์ทันสมัย ใส่เที่ยว ใส่ออกกำลังกาย หรือใส่ลำลองก็ได้หมด มีกระเป๋าหน้าสำหรับใส่มือหรือของเล็กๆ น้อยๆ เพิ่มความเท่และความอบอุ่นให้กับทุกวันของคุณ!", image: require('@/assets/hoodie2.avif') },
      { id: 9, name: "เสื้อฮู้ดสีแดง", price: 800, description: "เสื้อฮู้ดอุ่นสบาย ลุคเท่ มีสไตล์ กันหนาวได้ดี เสื้อฮู้ดเนื้อผ้านุ่ม ใส่สบาย ให้ความอบอุ่นได้ดีในวันอากาศเย็น ดีไซน์ทันสมัย ใส่เที่ยว ใส่ออกกำลังกาย หรือใส่ลำลองก็ได้หมด มีกระเป๋าหน้าสำหรับใส่มือหรือของเล็กๆ น้อยๆ เพิ่มความเท่และความอบอุ่นให้กับทุกวันของคุณ!", image: require('@/assets/hoodie3.jpg') }
      ],
      product: null,
      quantity: 1
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    addToCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      for (let i = 0; i < this.quantity; i++) {
        cart.push(this.product);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("เพิ่มลงตะกร้าแล้ว!");
    }
  },
  mounted() {
    this.product = this.products.find(p => p.id == this.id);
  }
};
</script>

<style scoped>
.details-container {
  display: flex;
  align-items: top;
  justify-content: top;
  gap: 50px;
  padding: 20px;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.product-image {
  width: 100%;
  max-width: 600px;
  border-radius: 100px;
}

.info-container {
  flex: 1;
  text-align: left;
}

h1 {
  font-size: 70px;
  margin-bottom: 10px;
}

.description {
  font-size: 40px;
  color: gray;
}

.price {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

.cart-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.cart-controls button {
  background-color: #ff9800;
  margin-left: 50px;
  border: none;
  color: white;
  font-size: 22px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.cart-controls span {
  font-size: 30px;
  margin-right: -50px;
}

.add-to-cart {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 30px;
  cursor: pointer;
  border-radius: 5px;
}

.add-to-cart:hover {
  background-color: #45a049;
}
</style>