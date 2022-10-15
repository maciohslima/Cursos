import time


def countdown(num_of_secs):
    while num_of_secs:
        m, s = divmod(num_of_secs, 60)
        min_sec_format = '{:02d}:{:02d}'.format(m, s)
        print(min_sec_format, end='\n')
        time.sleep(1)
        num_of_secs -= 1

    print('Contagem Encerrada')


inp = input('Insira o tempo em segundos: ')
countdown(int(inp))
