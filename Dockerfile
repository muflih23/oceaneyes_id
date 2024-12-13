# Base image untuk build dan serving React app
FROM node:20-alpine

# Direktori kerja di container
WORKDIR /app

# Salin package.json
COPY package.json ./

# Instal dependensi
RUN yarn install --frozen-lockfile

# Salin semua file proyek ke dalam container
COPY . .

# Build aplikasi untuk produksi
RUN yarn build

# Instal utilitas serve untuk menyajikan aplikasi
RUN yarn global add serve

# Expose port 3000 untuk akses HTTP
EXPOSE 3000

# Perintah untuk menjalankan aplikasi menggunakan serve
CMD ["serve", "-s", "build"]
