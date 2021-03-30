from multiprocessing import Process

def brand(VAG):
  print(VAG)

def engine(TDI):
  print(TDI)

def transmissionConstr(AWD_FWD):
  print(AWD_FWD)

if __name__ == "__main__":
  print('-'*20)

  carModels = ['  Volkswagen Phaeton', '  Audi A8', '  Skoda Superb', '  Seat Leon']
  processWork1 = []

  for cm in carModels:
    newProcess1 = Process(target = brand, args=(cm,))
    processWork1.append(newProcess1)
    newProcess1.start()
  
  for pw in processWork1:
    pw.join()

  print('-'*20)

  engineModels = ['  5.0 TDI', '  4.2 TDI', '  2.0 TDI', '  1.8 TDI']
  processWork2 = []

  for em in engineModels:
    newProcess2 = Process(target = engine, args=(em,))
    processWork2.append(newProcess2)
    newProcess2.start()
  
  for pw in processWork2:
    pw.join()
  
  print('-'*20)

  transmissionConstrType = ['  ALLTRACK', '  QUATTRO', '  FWD', '  FWD']
  processWork3 = []

  for tc in transmissionConstrType:
    newProcess3 = Process(target = transmissionConstr, args=(tc,))
    processWork3.append(newProcess3)
    newProcess3.start()
  
  for pw in processWork3:
    pw.join()
  
  print('-'*20)