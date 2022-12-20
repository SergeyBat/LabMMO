import random


SIZE_POPULATION = 6
SIZE_CHR = 7


class Chromos():
	"""Класс генерирующий популяция для кроссинга"""
	def __init__(self): 
		self.mass = []
		for i in range(SIZE_POPULATION):
			self.mass.append([random.randint(0,12) for z in range(SIZE_CHR)])
		
	def get_popul(self):
		return self.mass
	
	def show(self):
		print("Популяция\n")
		for i in range(len(self.mass)):
			print(f"Индивид № {i}", self.mass[i])
		print()


def oneDote(ls):
	"""Простая мутация (одноточечная)"""
	print("Одноточечная мутация")
	
	for i in range(len(ls)):
		cut_point = random.randint(0, len(ls[0])-2)
		ls[i][cut_point],ls[i][cut_point+1] = ls[i][cut_point+1], ls[i][cut_point]
	
	show(ls)


def twoDote(ls):
	"""Простая мутация (двухточечная)"""
	print("Двухточечная мутация")
	
	for i in range(len(ls)):
		cut_point1 = random.randint(0, len(ls[0])-1)
		cut_point2 = random.randint(0, len(ls[0])-1)
		ls[i][cut_point1],ls[i][cut_point2] = ls[i][cut_point2], ls[i][cut_point1]
	
	show(ls)


def invers(ls):
	"""Мутация инверсии"""
	print("Мутация инверсии")
	
	res = []
	
	for i in range(len(ls)):
		point1 = random.randint(1, len(ls)-2)
		point2 = random.randint(point1+2, len(ls))
		tmp = ls[i][point1:point2]
		
		res.append(ls[i][:point1] + tmp[-1:-len(tmp)-1:-1] + ls[i][point2:])
	
	show(res)


def delic(ls):
	"""Метод делеции, удаление части хромосомы """
	print("Делиция")
	
	res = []
	
	for i in range(len(ls)):
		point1 = random.randint(1, len(ls)-1)
		point2 = random.randint(point1+1, len(ls))
		
		res.append(ls[i][:point1] + ls[i][point2:])
	
	show(res)


def doubl(ls):
	"""Мутация дубликации"""
	print("Мутация дупликации")
	res = []
	
	for i in range(len(ls)):
		point1 = random.randint(1, len(ls)-1)
		point2 = random.randint(point1+1, len(ls))
		tmp = ls[i][point1:point2]
		
		res.append(ls[i][:point1] + tmp + tmp + ls[i][point2:])
	
	show(res)


def transloc(ls):
	"""Мутация транслокации"""
	print("Мутация транслокации")
	
	res = []
	
	for i in range(0, len(ls), 2):
		point1 = random.randint(1, len(ls)-1)
		point2 = random.randint(1, len(ls)-1)
		
		hr1 = ls[i][point1:]
		hr2 = ls[i+1][point2:]
		
		res.append(ls[i][:point1] + hr2)
		res.append(ls[i+1][:point2] + hr1)

	show(res)
		
	


def show(ls):
	"""Вспомогательеая функция вывода"""
	print()
	for i in range(len(ls)):
		print(f"Хромосома {i}", ls[i])
	print()
		
def main():
	gen = Chromos()
	gen.show()
	
	var = gen.get_popul()
	
	oneDote(var)
	twoDote(var)
	invers(var)
	delic(var)
	doubl(var)
	transloc(var)
	


if __name__ == "__main__":
	main()
