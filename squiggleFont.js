let squiggleFont = {
  C: [
    [80, ],
    [82, 12, 79, 10, 76, 8, 73, 6, 70, 4, 67, 3, 64, 2, 60, 1, 57, 0, 53, 0, 50, 0, 47, 0, 43, 0, 40, 1, 36, 2, 33, 3, 30, 4, 27, 6, 24, 8, 21, 10, 18, 12, 15, 14, 13, 17, 11, 19, 9, 22, 7, 25, 5, 28, 4, 31, 2, 35, 1, 38, 1, 41, 0, 45, 0, 48, 0, 52, 0, 55, 1, 59, 1, 62, 2, 65, 4, 69, 5, 72, 7, 75, 9, 78, 11, 81, 13, 83, 15, 86, 18, 88, 21, 90, 24, 92, 27, 94, 30, 96, 33, 97, 36, 98, 40, 99, 43, 100, 47, 100, 50, 100, 53, 100, 57, 100, 60, 99, 64, 98, 67, 97, 70, 96, 73, 94, 76, 92, 79, 90, ],
  ],
  h: [
    [50, ],
    [0, 0, 0, 100, ],
    [50, 75, 50, 73, 50, 72, 49, 70, 49, 68, 48, 66, 48, 65, 47, 63, 46, 62, 45, 60, 44, 59, 43, 58, 42, 56, 40, 55, 39, 54, 38, 53, 36, 53, 34, 52, 33, 51, 31, 51, 29, 50, 28, 50, 26, 50, 24, 50, 22, 50, 21, 50, 19, 51, 17, 51, 16, 52, 14, 53, 12, 53, 11, 54, 10, 55, 8, 56, 7, 58, 6, 59, 5, 60, 4, 62, 3, 63, 2, 65, 2, 66, 1, 68, 1, 70, 0, 72, 0, 73, ],
    [50, 75, 50, 100, ],
  ],
  r: [
    [30, ],
    [0, 50, 0, 100, ],
    [41, 56, 40, 55, 38, 54, 37, 53, 35, 52, 34, 52, 32, 51, 30, 51, 28, 50, 27, 50, 25, 50, 23, 50, 22, 50, 20, 51, 18, 51, 16, 52, 15, 52, 13, 53, 12, 54, 10, 55, 9, 56, 8, 57, 6, 58, 5, 60, 4, 61, 3, 62, 3, 64, 2, 66, 1, 67, 1, 69, 0, 71, 0, 72, 0, 74, ],
  ],
  o: [
    [50, ],
    [25, 100, 27, 100, 28, 100, 30, 99, 32, 99, 34, 98, 35, 98, 37, 97, 38, 96, 40, 95, 41, 94, 42, 93, 44, 92, 45, 90, 46, 89, 47, 88, 47, 86, 48, 84, 49, 83, 49, 81, 50, 79, 50, 78, 50, 76, 50, 74, 50, 72, 50, 71, 49, 69, 49, 67, 48, 66, 47, 64, 47, 63, 46, 61, 45, 60, 44, 58, 42, 57, 41, 56, 40, 55, 38, 54, 37, 53, 35, 52, 34, 52, 32, 51, 30, 51, 28, 50, 27, 50, 25, 50, 23, 50, 22, 50, 20, 51, 18, 51, 16, 52, 15, 52, 13, 53, 12, 54, 10, 55, 9, 56, 8, 57, 6, 58, 5, 60, 4, 61, 3, 62, 3, 64, 2, 66, 1, 67, 1, 69, 0, 71, 0, 72, 0, 74, 0, 76, 0, 78, 0, 79, 1, 81, 1, 83, 2, 84, 3, 86, 3, 88, 4, 89, 5, 90, 6, 92, 8, 93, 9, 94, 10, 95, 12, 96, 13, 97, 15, 98, 16, 98, 18, 99, 20, 99, 22, 100, 23, 100, ],
  ],
  m: [
    [100, ],
    [100, 75, 100, 73, 100, 72, 99, 70, 99, 68, 98, 66, 98, 65, 97, 63, 96, 62, 95, 60, 94, 59, 93, 58, 92, 56, 90, 55, 89, 54, 88, 53, 86, 53, 84, 52, 83, 51, 81, 51, 79, 50, 78, 50, 76, 50, 74, 50, 72, 50, 71, 50, 69, 51, 67, 51, 66, 52, 64, 53, 63, 53, 61, 54, 60, 55, 58, 56, 57, 58, 56, 59, 55, 60, 54, 62, 53, 63, 52, 65, 52, 66, 51, 68, 51, 70, 50, 72, 50, 73, ],
    [50, 75, 50, 73, 50, 72, 49, 70, 49, 68, 48, 66, 48, 65, 47, 63, 46, 62, 45, 60, 44, 59, 43, 58, 42, 56, 40, 55, 39, 54, 38, 53, 36, 53, 34, 52, 33, 51, 31, 51, 29, 50, 28, 50, 26, 50, 24, 50, 22, 50, 21, 50, 19, 51, 17, 51, 16, 52, 14, 53, 12, 53, 11, 54, 10, 55, 8, 56, 7, 58, 6, 59, 5, 60, 4, 62, 3, 63, 2, 65, 2, 66, 1, 68, 1, 70, 0, 72, 0, 73, ],
    [0, 50, 0, 100, ],
    [50, 75, 50, 100, ],
    [100, 75, 100, 100, ],
  ],
  i: [
    [1, ],
    [0, 50, 0, 100, ],
    [0, 27, 0, 27, 0, 27, 0, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 26, 1, 26, 2, 26, 2, 26, 2, 26, 2, 26, 2, 26, 2, 26, 2, 25, 2, 25, 2, 25, 2, 25, 2, 25, 2, 25, 2, 25, 2, 25, 2, 24, 2, 24, 2, 24, 2, 24, 2, 24, 2, 24, 1, 24, 1, 24, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23, -1, 23, -1, 23, -1, 23, -1, 23, -1, 23, -1, 23, -1, 23, -1, 24, -1, 24, -2, 24, -2, 24, -2, 24, -2, 24, -2, 24, -2, 24, -2, 25, -2, 25, -2, 25, -2, 25, -2, 25, -2, 25, -2, 25, -2, 25, -2, 26, -2, 26, -2, 26, -2, 26, -2, 26, -2, 26, -1, 26, -1, 26, -1, 27, -1, 27, -1, 27, -1, 27, -1, 27, -1, 27, -1, 27, 0, 27, 0, 27, 0, 27, ],
  ],
  e: [
    [50, ],
    [0, 75, 50, 75, ],
    [50, 75, 50, 73, 50, 72, 49, 70, 49, 68, 48, 66, 48, 65, 47, 63, 46, 62, 45, 60, 44, 59, 43, 58, 42, 56, 40, 55, 39, 54, 38, 53, 36, 53, 34, 52, 33, 51, 31, 51, 29, 50, 28, 50, 26, 50, 24, 50, 22, 50, 21, 50, 19, 51, 17, 51, 16, 52, 14, 53, 12, 53, 11, 54, 10, 55, 8, 56, 7, 58, 6, 59, 5, 60, 4, 62, 3, 63, 2, 65, 2, 66, 1, 68, 1, 70, 0, 72, 0, 73, 0, 75, 0, 77, 0, 78, 1, 80, 1, 82, 2, 84, 2, 85, 3, 87, 4, 88, 5, 90, 6, 91, 7, 92, 8, 94, 10, 95, 11, 96, 12, 97, 14, 97, 16, 98, 17, 99, 19, 99, 21, 100, 22, 100, 24, 100, 26, 100, 28, 100, 29, 100, 31, 99, 33, 99, 34, 98, 36, 97, 38, 97, 39, 96, 40, 95, ],
  ],
  S: [
    [50, ],
    [47, 13, 46, 11, 45, 10, 44, 8, 42, 7, 41, 6, 40, 5, 38, 4, 37, 3, 35, 2, 34, 2, 32, 1, 30, 1, 28, 0, 27, 0, 25, 0, 23, 0, 22, 0, 20, 1, 18, 1, 16, 2, 15, 2, 13, 3, 12, 4, 10, 5, 9, 6, 8, 7, 6, 8, 5, 10, 4, 11, 3, 12, 3, 14, 2, 16, 1, 17, 1, 19, 0, 21, 0, 22, 0, 24, 0, 26, 0, 28, 0, 29, 1, 31, 1, 33, 2, 34, 3, 36, 3, 38, 4, 39, 5, 40, 6, 42, 8, 43, 9, 44, 10, 45, 12, 46, 13, 47, 15, 48, 16, 48, 18, 49, 20, 49, 22, 50, 23, 50, ],
    [0, 75, 0, 77, 0, 78, 1, 80, 1, 82, 2, 84, 2, 85, 3, 87, 4, 88, 5, 90, 6, 91, 7, 92, 8, 94, 10, 95, 11, 96, 12, 97, 14, 97, 16, 98, 17, 99, 19, 99, 21, 100, 22, 100, 24, 100, 26, 100, 28, 100, 29, 100, 31, 99, 33, 99, 34, 98, 36, 97, 38, 97, 39, 96, 40, 95, 42, 94, 43, 92, 44, 91, 45, 90, 46, 88, 47, 87, 48, 85, 48, 84, 49, 82, 49, 80, 50, 78, 50, 77, 50, 75, 50, 73, 50, 72, 49, 70, 49, 68, 48, 66, 48, 65, 47, 63, 46, 62, 45, 60, 44, 59, 43, 58, 42, 56, 40, 55, 39, 54, 37, 53, 36, 53, 34, 52, 33, 51, 31, 51, 29, 50, 28, 50, 26, 50, ],
  ],
  q: [
    [50, ],
    [25, 100, 27, 100, 28, 100, 30, 99, 32, 99, 34, 98, 35, 98, 37, 97, 38, 96, 40, 95, 41, 94, 42, 93, 44, 92, 45, 90, 46, 89, 47, 88, 47, 86, 48, 84, 49, 83, 49, 81, 50, 79, 50, 78, 50, 76, 50, 74, 50, 72, 50, 71, 49, 69, 49, 67, 48, 66, 47, 64, 47, 63, 46, 61, 45, 60, 44, 58, 42, 57, 41, 56, 40, 55, 38, 54, 37, 53, 35, 52, 34, 52, 32, 51, 30, 51, 28, 50, 27, 50, 25, 50, 23, 50, 22, 50, 20, 51, 18, 51, 16, 52, 15, 52, 13, 53, 12, 54, 10, 55, 9, 56, 8, 57, 6, 58, 5, 60, 4, 61, 3, 62, 3, 64, 2, 66, 1, 67, 1, 69, 0, 71, 0, 72, 0, 74, 0, 76, 0, 78, 0, 79, 1, 81, 1, 83, 2, 84, 3, 86, 3, 88, 4, 89, 5, 90, 6, 92, 8, 93, 9, 94, 10, 95, 12, 96, 13, 97, 15, 98, 16, 98, 18, 99, 20, 99, 22, 100, 23, 100, ],
    [50, 50, 50, 133, ],
  ],
  u: [
    [50, ],
    [0, 75, 0, 77, 0, 78, 1, 80, 1, 82, 2, 84, 2, 85, 3, 87, 4, 88, 5, 90, 6, 91, 7, 92, 8, 94, 10, 95, 11, 96, 12, 97, 14, 97, 16, 98, 17, 99, 19, 99, 21, 100, 22, 100, 24, 100, 26, 100, 28, 100, 29, 100, 31, 99, 33, 99, 34, 98, 36, 97, 38, 97, 39, 96, 40, 95, 42, 94, 43, 92, 44, 91, 45, 90, 46, 88, 47, 87, 48, 85, 48, 84, 49, 82, 49, 80, 50, 78, 50, 77, ],
    [50, 50, 50, 100, ],
    [0, 50, 0, 75, ],
  ],
  i: [
    [1, ],
    [0, 50, 0, 100, ],
    [0, 27, 0, 27, 0, 27, 0, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 26, 1, 26, 2, 26, 2, 26, 2, 26, 2, 26, 2, 26, 2, 26, 2, 25, 2, 25, 2, 25, 2, 25, 2, 25, 2, 25, 2, 25, 2, 25, 2, 24, 2, 24, 2, 24, 2, 24, 2, 24, 2, 24, 1, 24, 1, 24, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23, -1, 23, -1, 23, -1, 23, -1, 23, -1, 23, -1, 23, -1, 23, -1, 24, -1, 24, -2, 24, -2, 24, -2, 24, -2, 24, -2, 24, -2, 24, -2, 25, -2, 25, -2, 25, -2, 25, -2, 25, -2, 25, -2, 25, -2, 25, -2, 26, -2, 26, -2, 26, -2, 26, -2, 26, -2, 26, -1, 26, -1, 26, -1, 27, -1, 27, -1, 27, -1, 27, -1, 27, -1, 27, -1, 27, 0, 27, 0, 27, 0, 27, ],
  ],
  g: [
    [50, ],
    [25, 100, 27, 100, 28, 100, 30, 99, 32, 99, 34, 98, 35, 98, 37, 97, 38, 96, 40, 95, 41, 94, 42, 93, 44, 92, 45, 90, 46, 89, 47, 88, 47, 86, 48, 84, 49, 83, 49, 81, 50, 79, 50, 78, 50, 76, 50, 74, 50, 72, 50, 71, 49, 69, 49, 67, 48, 66, 47, 64, 47, 63, 46, 61, 45, 60, 44, 58, 42, 57, 41, 56, 40, 55, 38, 54, 37, 53, 35, 52, 34, 52, 32, 51, 30, 51, 28, 50, 27, 50, 25, 50, 23, 50, 22, 50, 20, 51, 18, 51, 16, 52, 15, 52, 13, 53, 12, 54, 10, 55, 9, 56, 8, 57, 6, 58, 5, 60, 4, 61, 3, 62, 3, 64, 2, 66, 1, 67, 1, 69, 0, 71, 0, 72, 0, 74, 0, 76, 0, 78, 0, 79, 1, 81, 1, 83, 2, 84, 3, 86, 3, 88, 4, 89, 5, 90, 6, 92, 8, 93, 9, 94, 10, 95, 12, 96, 13, 97, 15, 98, 16, 98, 18, 99, 20, 99, 22, 100, 23, 100, ],
    [50, 50, 50, 100, ],
    [50, 101, 50, 103, 50, 104, 49, 106, 49, 108, 48, 109, 47, 111, 47, 113, 46, 114, 45, 115, 44, 117, 42, 118, 41, 119, 40, 120, 38, 121, 37, 122, 35, 123, 34, 123, 32, 124, 30, 124, 28, 125, 27, 125, 25, 125, ],
    [25, 125, 0, 125, ],
  ],
  l: [
    [1, ],
    [0, 0, 0, 100, ],
  ],
  0: [
    [50, ],
    [50, 25, 50, 23, 50, 22, 49, 20, 49, 18, 48, 16, 48, 15, 47, 13, 46, 12, 45, 10, 44, 9, 43, 8, 42, 6, 40, 5, 39, 4, 38, 3, 36, 3, 34, 2, 33, 1, 31, 1, 29, 0, 28, 0, 26, 0, 24, 0, 22, 0, 21, 0, 19, 1, 17, 1, 16, 2, 14, 3, 12, 3, 11, 4, 10, 5, 8, 6, 7, 8, 6, 9, 5, 10, 4, 12, 3, 13, 2, 15, 2, 16, 1, 18, 1, 20, 0, 22, 0, 23, ],
    [0, 25, 0, 75, ],
    [0, 75, 0, 77, 0, 78, 1, 80, 1, 82, 2, 84, 2, 85, 3, 87, 4, 88, 5, 90, 6, 91, 7, 92, 8, 94, 10, 95, 11, 96, 12, 97, 14, 97, 16, 98, 17, 99, 19, 99, 21, 100, 22, 100, 24, 100, 26, 100, 28, 100, 29, 100, 31, 99, 33, 99, 34, 98, 36, 97, 38, 97, 39, 96, 40, 95, 42, 94, 43, 92, 44, 91, 45, 90, 46, 88, 47, 87, 48, 85, 48, 84, 49, 82, 49, 80, 50, 78, 50, 77, ],
    [50, 75, 50, 25, ],
  ],
  1: [
    [50, ],
    [25, 100, 25, 0, ],
    [25, 0, 0, 13, ],
  ],
  2: [
    [50, ],
    [0, 24, 0, 22, 0, 21, 1, 19, 1, 17, 2, 16, 3, 14, 3, 12, 4, 11, 5, 10, 6, 8, 8, 7, 9, 6, 10, 5, 12, 4, 13, 3, 15, 2, 16, 2, 18, 1, 20, 1, 22, 0, 23, 0, 25, 0, 27, 0, 28, 0, 30, 1, 32, 1, 34, 2, 35, 2, 37, 3, 38, 4, 40, 5, 41, 6, 42, 7, 44, 8, 45, 10, 46, 11, 47, 13, 47, 14, 48, 16, 49, 17, 49, 19, 50, 21, 50, 22, 50, 24, 50, 26, 50, 28, 50, 29, 49, 31, 49, 33, 48, 34, 47, 36, 47, 38, ],
    [47, 38, 0, 100, 50, 100, ],
  ],
  3: [
    [50, ],
    [25, 50, 27, 50, 28, 50, 30, 49, 32, 49, 34, 48, 35, 48, 37, 47, 38, 46, 40, 45, 41, 44, 42, 43, 44, 42, 45, 40, 46, 39, 47, 38, 47, 36, 48, 34, 49, 33, 49, 31, 50, 29, 50, 28, 50, 26, 50, 24, 50, 22, 50, 21, 49, 19, 49, 17, 48, 16, 47, 14, 47, 13, 46, 11, 45, 10, 44, 8, 42, 7, 41, 6, 40, 5, 38, 4, 37, 3, 35, 2, 34, 2, 32, 1, 30, 1, 28, 0, 27, 0, 25, 0, 23, 0, 22, 0, 20, 1, 18, 1, 16, 2, 15, 2, 13, 3, 12, 4, 10, 5, 9, 6, 8, 7, 6, 8, 5, 10, 4, 11, 3, 12, 3, 14, 2, 16, 1, 17, 1, 19, 0, 21, 0, 22, 0, 24, ],
    [0, 75, 0, 77, 0, 78, 1, 80, 1, 82, 2, 84, 2, 85, 3, 87, 4, 88, 5, 90, 6, 91, 7, 92, 8, 94, 10, 95, 11, 96, 12, 97, 14, 97, 16, 98, 17, 99, 19, 99, 21, 100, 22, 100, 24, 100, 26, 100, 28, 100, 29, 100, 31, 99, 33, 99, 34, 98, 36, 97, 38, 97, 39, 96, 40, 95, 42, 94, 43, 92, 44, 91, 45, 90, 46, 88, 47, 87, 48, 85, 48, 84, 49, 82, 49, 80, 50, 78, 50, 77, 50, 75, 50, 73, 50, 72, 49, 70, 49, 68, 48, 66, 48, 65, 47, 63, 46, 62, 45, 60, 44, 59, 43, 58, 42, 56, 40, 55, 39, 54, 37, 53, 36, 53, 34, 52, 33, 51, 31, 51, 29, 50, 28, 50, 26, 50, ],
  ],
  4: [
    [50, ],
    [33, 0, 0, 50, 50, 50, ],
    [40, 33, 40, 100, ],
  ],
  5: [
    [50, ],
    [3, 86, 4, 87, 5, 89, 6, 91, 8, 92, 9, 93, 10, 95, 12, 96, 13, 97, 15, 98, 16, 98, 18, 99, 20, 99, 22, 100, 23, 100, 25, 100, 27, 100, 28, 100, 30, 99, 32, 99, 34, 98, 35, 98, 37, 97, 38, 96, 40, 95, 41, 93, 42, 92, 44, 91, 45, 89, 46, 87, 47, 86, 47, 84, 48, 82, 49, 80, 49, 78, 50, 76, 50, 74, 50, 72, 50, 70, 50, 68, 50, 66, 49, 65, 49, 63, 48, 61, 47, 59, 47, 57, 46, 55, 45, 54, 44, 52, 42, 51, 41, 50, 40, 48, 38, 47, 37, 46, 35, 45, 34, 45, 32, 44, 30, 43, 28, 43, 27, 43, ],
    [27, 43, 0, 43, 0, 43, 0, 0, 40, 0, ],
  ],
  6: [
    [50, ],
    [50, 25, 50, 23, 50, 22, 49, 20, 49, 18, 48, 16, 48, 15, 47, 13, 46, 12, 45, 10, 44, 9, 43, 8, 42, 6, 40, 5, 39, 4, 38, 3, 36, 3, 34, 2, 33, 1, 31, 1, 29, 0, 28, 0, 26, 0, 24, 0, 22, 0, 21, 0, 19, 1, 17, 1, 16, 2, 14, 3, 12, 3, 11, 4, 10, 5, 8, 6, 7, 8, 6, 9, 5, 10, 4, 12, 3, 13, 2, 15, 2, 16, 1, 18, 1, 20, 0, 22, 0, 23, ],
    [0, 25, 0, 75, ],
    [0, 75, 0, 77, 0, 78, 1, 80, 1, 82, 2, 84, 2, 85, 3, 87, 4, 88, 5, 90, 6, 91, 7, 92, 8, 94, 10, 95, 11, 96, 13, 97, 14, 97, 16, 98, 17, 99, 19, 99, 21, 100, 22, 100, 24, 100, 26, 100, 28, 100, 29, 100, 31, 99, 33, 99, 34, 98, 36, 97, 38, 97, 39, 96, 40, 95, 42, 94, 43, 92, 44, 91, 45, 90, 46, 88, 47, 87, 48, 85, 48, 84, 49, 82, 49, 80, 50, 78, 50, 77, 50, 75, 50, 73, 50, 72, 49, 70, 49, 68, 48, 66, 48, 65, 47, 63, 46, 62, 45, 60, 44, 59, 43, 58, 42, 56, 40, 55, 39, 54, 38, 53, 36, 53, 34, 52, 33, 51, 31, 51, 29, 50, 28, 50, 26, 50, 24, 50, 22, 50, 21, 50, 19, 51, 17, 51, 16, 52, 14, 53, 12, 53, 11, 54, 10, 55, 8, 56, 7, 58, 6, 59, 5, 60, 4, 62, 3, 63, 2, 65, 2, 66, 1, 68, 1, 70, 0, 72, 0, 73, ],
  ],
  7: [
    [50, ],
    [0, 13, 0, 0, 50, 0, 25, 100, ],
  ],
  8: [
    [50, ],
    [25, 50, 27, 50, 28, 50, 30, 49, 32, 49, 34, 48, 35, 48, 37, 47, 38, 46, 40, 45, 41, 44, 42, 43, 44, 42, 45, 40, 46, 39, 47, 38, 47, 36, 48, 34, 49, 33, 49, 31, 50, 29, 50, 28, 50, 26, 50, 24, 50, 22, 50, 21, 49, 19, 49, 17, 48, 16, 47, 14, 47, 13, 46, 11, 45, 10, 44, 8, 42, 7, 41, 6, 40, 5, 38, 4, 37, 3, 35, 2, 34, 2, 32, 1, 30, 1, 28, 0, 27, 0, 25, 0, 23, 0, 22, 0, 20, 1, 18, 1, 16, 2, 15, 2, 13, 3, 12, 4, 10, 5, 9, 6, 8, 7, 6, 8, 5, 10, 4, 11, 3, 12, 3, 14, 2, 16, 1, 17, 1, 19, 0, 21, 0, 22, 0, 24, 0, 26, 0, 28, 0, 29, 1, 31, 1, 33, 2, 34, 3, 36, 3, 38, 4, 39, 5, 40, 6, 42, 8, 43, 9, 44, 10, 45, 12, 46, 13, 47, 15, 48, 16, 48, 18, 49, 20, 49, 22, 50, 23, 50, ],
    [25, 100, 27, 100, 28, 100, 30, 99, 32, 99, 34, 98, 35, 98, 37, 97, 38, 96, 40, 95, 41, 94, 42, 93, 44, 92, 45, 90, 46, 89, 47, 88, 47, 86, 48, 84, 49, 83, 49, 81, 50, 79, 50, 78, 50, 76, 50, 74, 50, 72, 50, 71, 49, 69, 49, 67, 48, 66, 47, 64, 47, 63, 46, 61, 45, 60, 44, 58, 42, 57, 41, 56, 40, 55, 38, 54, 37, 53, 35, 52, 34, 52, 32, 51, 30, 51, 28, 50, 27, 50, 25, 50, 23, 50, 22, 50, 20, 51, 18, 51, 16, 52, 15, 52, 13, 53, 12, 54, 10, 55, 9, 56, 8, 57, 6, 58, 5, 60, 4, 61, 3, 62, 3, 64, 2, 66, 1, 67, 1, 69, 0, 71, 0, 72, 0, 74, 0, 76, 0, 78, 0, 79, 1, 81, 1, 83, 2, 84, 3, 86, 3, 88, 4, 89, 5, 90, 6, 92, 8, 93, 9, 94, 10, 95, 12, 96, 13, 97, 15, 98, 16, 98, 18, 99, 20, 99, 22, 100, 23, 100, ],
  ],
  9: [
    [50, ],
    [25, 50, 27, 50, 28, 50, 30, 49, 32, 49, 34, 48, 35, 48, 37, 47, 38, 46, 40, 45, 41, 44, 42, 43, 44, 42, 45, 40, 46, 39, 47, 38, 47, 36, 48, 34, 49, 33, 49, 31, 50, 29, 50, 28, 50, 26, 50, 24, 50, 22, 50, 21, 49, 19, 49, 17, 48, 16, 47, 14, 47, 13, 46, 11, 45, 10, 44, 8, 42, 7, 41, 6, 40, 5, 38, 4, 37, 3, 35, 2, 34, 2, 32, 1, 30, 1, 28, 0, 27, 0, 25, 0, 23, 0, 22, 0, 20, 1, 18, 1, 16, 2, 15, 2, 13, 3, 12, 4, 10, 5, 9, 6, 8, 7, 6, 8, 5, 10, 4, 11, 3, 12, 3, 14, 2, 16, 1, 17, 1, 19, 0, 21, 0, 22, 0, 24, 0, 26, 0, 28, 0, 29, 1, 31, 1, 33, 2, 34, 3, 36, 3, 38, 4, 39, 5, 40, 6, 42, 8, 43, 9, 44, 10, 45, 12, 46, 13, 47, 15, 48, 16, 48, 18, 49, 20, 49, 22, 50, 23, 50, ],
    [50, 25, 50, 100, ],
  ],
  " ": [
    [50]
  ],
  "#": [
    [50, ],
    [13, 0, 13, 100, ],
    [38, 0, 38, 100, ],
    [0, 33, 50, 33, ],
    [0, 67, 50, 67, ],
  ],
};
