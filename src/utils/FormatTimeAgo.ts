import { parse, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function FormatTimeAgo(dateString: string): string {  
  const date = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date());
  
  const distance = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
  
  return distance.charAt(0).toUpperCase() + distance.slice(1);
}